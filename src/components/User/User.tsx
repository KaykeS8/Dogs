import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import { Feed } from '../Feed/Feed';
import { Head } from '../Helpers/Head';
import { NotFoundPage } from '../Helpers/NotfoudPage';
import { UserHeader } from './UserHeader/UserHeader';
import { UserPhotoPost } from './UserPhotoPost/UserPhotoPost';
import { UserStats } from './UserStats';

export const User = () => {

  const { data } = React.useContext(UserContext)

  return (
    <section className='container'>
      <UserHeader />
      <Head title='Minha conta' description='Página da conta do usúario'/>
      <Routes>
        <Route path='/' element={<Feed user={data.id} />} />
        <Route path='postar' element={<UserPhotoPost />} />
        <Route path='estatisticas' element={<UserStats />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </section>
  )
}