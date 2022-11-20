import React, { FormEvent } from 'react'
import { PASSWORD_LOST } from '../../api';
import { useFetch } from '../../hooks/useFetch';
import { UseForm } from '../../hooks/useForm';
import { Button } from '../Forms/Button/Button'
import { Input } from '../Forms/Input/Input'
import { Error } from '../Helpers/Error';
import { Head } from '../Helpers/Head';

export const LoginPasswordLost = () => {

  const login = UseForm()
  const { data, error, loading, request } = useFetch()

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (login.validate()) {
      const { options, url } = PASSWORD_LOST({
        login: login.value,
        url: window.location.href.replace('perdeu', 'resetar')
      })
      const { json } = await request(url, options)
      console.log(json)
    }
  }

  return (
    <section>
      <Head title='Perdeu senha' description='Página para recuperar a senha perdida'/>
      <h1 className='title'>Perdeu a senha</h1>
      {data ? <p style={{ color: '#4c1' }}>{data}</p> :
        <form onSubmit={handleSubmit}>
          <Input label='Email / Usuario' type='text' name='email'{...login} onBlur={login.onblur} />
          {loading ? <Button disabled text='Enviando...' /> :
            <Button text='Enviar Email' />
          }
        </form>
      }
      <Error error={error} />
    </section>
  )
}
