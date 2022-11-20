import React from 'react';
import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET } from '../api';
import { contentContext, PropsStorage } from './typingUserContext';
import { useNavigate } from 'react-router-dom';

export const UserContext = React.createContext<contentContext | any>('');

export const UserStorage = ({ children }: PropsStorage) => {

  const [data, setData] = React.useState(null);
  const [login, setLogin] = React.useState<boolean | null>(null);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string | null>(null);
  const navigate = useNavigate();

  async function userLogin(username: string, password: string) {
    try {
      setError(null)
      setLoading(true)
      const { options, url } = TOKEN_POST({ username, password })
      const tokeRes = await fetch(url, options)
      console.log(tokeRes)
      if (!tokeRes.ok) throw new Error(`Error: Usuário inválido`)
      const { token } = await tokeRes.json()
      window.localStorage.setItem('token', token)
      await getUser(token)
      navigate('/conta')
    } catch (err: any) {
      setError(err.message)
      setLogin(false)
    } finally {
      setLoading(false)
    }
  }


  async function getUser(token: string) {
    const { options, url } = USER_GET(token)
    const response = await fetch(url, options)
    const json = await response.json();
    setData(json)
    setLogin(true)
  }


  const userLogout = React.useCallback(async function () {
    setData(null)
    setError(null)
    setLoading(false)
    setLogin(false)
    window.localStorage.removeItem('token')
    navigate('/login')
  }, [navigate])


  React.useEffect(() => {
    async function autoLogin() {
      const token = window.localStorage.getItem('token');
      if (token) {
        try {
          setError(null)
          setLoading(true)
          const { url, options } = TOKEN_VALIDATE_POST(token)
          const response = await fetch(url, options)
          if (!response.ok) throw new Error('Token invalido')
          await getUser(token)
        } catch (err) {
          userLogout()
        } finally {
          setLoading(false)
        }
      } else {
        setLogin(false)
      }
    }
    autoLogin()
  }, [userLogout])


  return (
    <UserContext.Provider value={{ userLogin, data, userLogout, error, loading, login }}>
      {children}
    </UserContext.Provider>
  )
}