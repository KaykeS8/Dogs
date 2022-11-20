import React, { Dispatch, SetStateAction } from 'react'
import { PHOTOS_GET } from '../../api';
import { useFetch } from '../../hooks/useFetch'
import { Error } from '../Helpers/Error';
import { Loading } from '../Helpers/Loading';
import { FeedPhotosItem, Propsphoto } from './FeedPhotosItem'
import Styles from './FeedPhotos.module.css';

interface propsFeedPhotos {
  setModalPhoto: Dispatch<SetStateAction<any>>;
  user: number;
  page: number;
  setInfinite: Dispatch<SetStateAction<boolean>>
}

export const FeedPhotos = ({ setModalPhoto, user, page, setInfinite }: propsFeedPhotos) => {

  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    async function fetchPhotos() {
      const total = 6
      const { url, options } = PHOTOS_GET({ page: page, total: total, user: user });
      const { response, json } = await request(url, options)
      if (response && response.ok && json.length < total) setInfinite(false)
    } fetchPhotos()
  }, [request, user, page, setInfinite]);


  if (error) return <Error error={error} />
  if (loading) return <Loading />
  if (data)
    return (
      <ul className={`${Styles.feed} animeLeft`}>
        {data.map((photos: Propsphoto) => (
          <FeedPhotosItem key={photos.id} {...photos} setModalPhoto={setModalPhoto} />
        ))}
      </ul>
    )
  else return null
}
