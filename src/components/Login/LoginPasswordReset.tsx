import React, { FormEvent } from 'react'
import { useNavigate } from 'react-router-dom';
import { PASSWORD_RESET } from '../../api';
import { useFetch } from '../../hooks/useFetch';
import { UseForm } from '../../hooks/useForm';
import { Button } from '../Forms/Button/Button';
import { Input } from '../Forms/Input/Input';
import { Head } from '../Helpers/Head';

export const LoginPasswordReset = () => {


  const [login, setLogin] = React.useState('');
  const [key, setKey] = React.useState("");
  const password = UseForm()
  const { error, loading, request } = useFetch()
  const navigate = useNavigate()

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const key = params.get('key');
    const login = params.get('login')
    if (key) setKey(key)
    if (login) setLogin(login)
  }, [])

  async function handleSubmit(e: FormEvent) {
    const { url, options } = PASSWORD_RESET({
      login,
      key,
      password: password.value
    })

   const {response} = await request(url, options)
    if(response?.ok) navigate('/login')

  }


  return (
    <section className='animeLeft'>
      <Head title='Resetar' description='Página para resetar senha'/>
      <h1 className="title">Resete a senha</h1>
      <form onSubmit={handleSubmit}>
        <Input label='Nova senha' type='password' name='password' {...password} onBlur={password.onblur} />
        {loading ? <Button disabled text='Resetando...' /> : <Button text='Resetar' />}
      </form>
    </section>
  )
}
