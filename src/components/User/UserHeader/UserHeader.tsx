import React from 'react';
import { UserHeaderNav } from '../UserHeaderNav/UserHeaderNav';
import Styles from './UserHeader.module.css';
import { useLocation } from 'react-router-dom';
import { useMedia } from '../../../hooks/useMedia';

export const UserHeader = () => {

  const [title, setTitle] = React.useState<string | null>(null)
  const {pathname} = useLocation()

  React.useEffect(() => {
    switch(pathname) {
      case '/conta/estatisticas':
        setTitle("Estatisticas")
        break;
      case '/conta/postar':
        setTitle("Poste sua foto")
        break;
      default:
        setTitle('Minha conta')
    }
  }, [pathname]);


  return (
    <header className={Styles.header}>
      <h1 className='title'>{title}</h1>
      <UserHeaderNav/>
    </header>
  )
}