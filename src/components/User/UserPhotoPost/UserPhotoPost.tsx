import React, { HTMLInputTypeAttribute } from 'react';
import { useNavigate } from 'react-router-dom';
import { PHOTO_POST } from '../../../api';
import { useFetch } from '../../../hooks/useFetch';
import { UseForm } from '../../../hooks/useForm';
import { Button } from '../../Forms/Button/Button';
import { Input } from '../../Forms/Input/Input';
import { Error } from '../../Helpers/Error';
import { Head } from '../../Helpers/Head';
import { Loading } from '../../Helpers/Loading';
import Styles from './UserPhotoPost.module.css'

export const UserPhotoPost = () => {

  const nome = UseForm();
  const peso = UseForm('number');
  const idade = UseForm('number');
  const [img, setImg] = React.useState({} as { raw: File, preview: string; });
  const { data, error, loading, request } = useFetch();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (data) navigate("/conta")
  }, [data, navigate])


  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const formData = new FormData();
    formData.append('img', img.raw);
    formData.append('nome', nome.value);
    formData.append('peso', peso.value);
    formData.append('idade', idade.value);

    const token = window.localStorage.getItem('token')
    const { options, url } = PHOTO_POST(token!, formData)
    request(url, options)

  }


  function handleChange({ target }: React.ChangeEvent<HTMLInputElement>) {
    setImg({
      preview: URL.createObjectURL(target.files![0]),
      raw: target.files![0],
    })
  }

  return (
    <section className={`${Styles.photoPost} animeLeft`}>
      <Head title='Poste sua foto' description='Página para postagem de fotos no site dogs'/>
      <form onSubmit={handleSubmit}>
        <Input label='Nome' type='text' name='nome' {...nome} onBlur={nome.onblur} />
        <Input label='Peso' type='number' name='peso' {...peso} onBlur={peso.onblur} />
        <Input label='Idade' type='number' name='idade' {...idade} onBlur={idade.onblur} />
        <input className={Styles.file} type={'file'} name="img" id="img" onChange={handleChange} />
        {loading ?
          <Button text='Carregando...' disabled />
          :
          <Button text='Enviar' />
        }
        {error && <Error error={error} />}
      </form>
      <div>
        {img.preview && <div
          className={Styles.preview}
          style={{ backgroundImage: `url('${img.preview}')` }}
        ></div>}
      </div>
    </section>
  )
}

