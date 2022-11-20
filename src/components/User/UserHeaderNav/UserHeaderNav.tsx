import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { UserContext } from '../../../context/UserContext'
import MinhasFotos from '../../../Assets/feed.svg';
import estatisticas from '../../../Assets/estatisticas.svg';
import AdicionarFoto from '../../../Assets/adicionar.svg';
import Sair from '../../../Assets/sair.svg';
import Styles from './UserHeaderNav.module.css';
import { useMedia } from '../../../hooks/useMedia';

export const UserHeaderNav = () => {
  const { userLogout } = React.useContext(UserContext)

  const mobile = useMedia('(max-width:40rem)')
  const [mobileMenu, setMobileMenu] = React.useState(false)

  const {pathname} = useLocation();

  React.useEffect(() => {
    setMobileMenu(false)
  }, [pathname])

  return (
    <>
      {mobile && (
        <button
          aria-label='Menu'
          onClick={() => setMobileMenu(!mobileMenu)}
          className={`${Styles.mobileButton} ${mobileMenu && Styles.mobileButtonActive}`}
        ></button>
      )}

      <nav className={`${mobile ? Styles.navMobile : Styles.nav} ${mobileMenu && Styles.navMobileActive}`}>
        <NavLink to={'/conta'} end className={({ isActive }) => {
          if (isActive) return Styles.active
          else return ''
        }}>
          <img className={Styles.img} src={MinhasFotos} alt="Icone de fotos" />
          {mobile && 'Minhas Fotos'}
        </NavLink>
        <NavLink to={'/conta/estatisticas'} className={({ isActive }) => {
          if (isActive) return Styles.active
          else return ''
        }}>
          <img className={Styles.img} src={estatisticas} alt="Icone de estatisticas" />
          {mobile && 'Estatisticas'}
        </NavLink>
        <NavLink to={"/conta/postar"} className={({ isActive }) => {
          if (isActive) return Styles.active
          else return ''
        }}>
          <img className={Styles.img} src={AdicionarFoto} alt="Icone de adicionar foto" />
          {mobile && 'Adicionar Foto'}
        </NavLink>
        <button onClick={userLogout}>
          <img className={Styles.img} src={Sair} alt="Icone de sair" />
          {mobile && 'Sair'}
        </button>
      </nav >
    </>
  )
}
