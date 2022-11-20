import React from 'react'
import { PHOTO_GET } from '../../api';
import { useFetch } from '../../hooks/useFetch';
import Styles from './FeedModal.module.css';
import {Error} from '.././Helpers/Error';
import { Loading } from '../Helpers/Loading';
import { PhotoContent } from '../Photo/PhotoContent';

export const FeedModal = ({photo, setModalPhoto}: any) => {

  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    const {options,url} = PHOTO_GET(photo.id);
    request(url, options)
  }, [photo, request])


  function handleClickOutsideClick(event:React.MouseEvent) {
    if(event.target === event.currentTarget) {
      setModalPhoto(null)
    }
  }

  return (
    <div className={Styles.modal} onClick={handleClickOutsideClick}>
      {error && <Error error={error}/>}
      {loading && <Loading/>}
      {data && <PhotoContent data={data}/>}
    </div>
  )
}
