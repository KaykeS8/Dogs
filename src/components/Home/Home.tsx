import React from 'react';
import { Feed } from '../Feed/Feed';
import { Head } from '../Helpers/Head';
import { Loading } from '../Helpers/Loading';

export const Home = () => {
  return (
    <section className='container mainContainer'>
      <Head title='Fotos' description='Página home do site'/>
      <Feed />
    </section>
  )
}