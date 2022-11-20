import React from 'react'
import { Input } from '../Forms/Input/Input';
import { Button } from '../Forms/Button/Button';
import { UseForm } from '../../hooks/useForm';
import { USER_POST } from '../../api';
import { UserContext } from '../../context/UserContext';
import { useFetch } from '../../hooks/useFetch';
import { Error } from '../Helpers/Error';
import { Head } from '../Helpers/Head';

export const LoginCreate = () => {

  const username = UseForm();
  const email = UseForm('email');
  const password = UseForm();

  const { userLogin } = React.useContext(UserContext);
  const { error, loading, request } = useFetch()


  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault()

    const { options, url } = USER_POST({
      username: username.value,
      email: email.value,
      password: password.value
    })
    const { response } = await request(url, options)
    if (response!.ok) await userLogin(username.value, password.value)
  }


  return (
    <section className='animeLeft'>
      <Head title='Cadastrar' description='Página de cadastro do site Dogs'/>
      <h1 className='title'>Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input label='Usuário' type='text' name='username' onBlur={username.onblur} {...username} />
        <Input label='Email' type='email' name='email' onBlur={email.onblur} {...email} />
        <Input label='Senha' type='password' name='password' onBlur={password.onblur} {...password} />
        {loading ?
          <Button text='Carregando...' disabled />
          :
          <Button text='Cadastrar' />
        }
        {error && <Error error={error} />}
      </form>
    </section>
  )
}
