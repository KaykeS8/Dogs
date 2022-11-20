import React from 'react'
import { Navigate } from 'react-router-dom';
import { PHOTO_DELETE } from '../../api';
import { useFetch } from '../../hooks/useFetch';
import Styles from './PhotoDelete.module.css';

interface PropsPhotoDelete {
  id: number;
}
export const PhotoDelete = ({ id }: PropsPhotoDelete) => {

  const { loading, request } = useFetch()

  async function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    const confirm = window.confirm("Tem certeza que deseja deletar?")
    if (confirm) {
      const { url, options } = PHOTO_DELETE(id)
      const { response } = await request(url, options)

      if (response!.ok) return <Navigate to={'/conta'}/>;
    }
  }
  return (
    <>
      {loading ?
        <button disabled className={Styles.delete}>
          Deletar
        </button>
        :
        <button onClick={handleClick} className={Styles.delete}>
          Deletar
        </button>
      }
    </>
  )
}