import React from 'react'
import { useParams } from 'react-router-dom'
import { Feed } from '../Feed/Feed'
import { Head } from '../Helpers/Head'

export const UserProfile = () => {

  const { user } = useParams()

  let teste = 'kayke'

  console.log(Number(teste))

  return (
    <section className='container mainSection'>
      <Head title={user!} description="Página do usuario"/>
      <h1 className='title'>{user}</h1>
      <Feed user={Number(user)}/>
    </section>
  )
}
