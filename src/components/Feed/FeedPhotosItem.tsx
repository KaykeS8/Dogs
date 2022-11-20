import React, { Dispatch, SetStateAction } from 'react'
import Styles from './FeedPhotosItem.module.css';
import { Image } from '../Helpers/Image';

export interface Propsphoto {
  acessos: string;
  author: string;
  date: string;
  id: number;
  idade: string;
  peso: string;
  src: string;
  title: string;
  total_comments: string;
  setModalPhoto: Dispatch<SetStateAction<any>>;
}

export const FeedPhotosItem = (photos: Propsphoto) => {

  function handleClick() {
    photos.setModalPhoto(photos)
  }

  return (
    <li className={Styles.photo} onClick={handleClick}>
      <Image alt={photos.title} src={photos.src} />
      <span className={Styles.visualizacao}>{photos.acessos}</span>
    </li>
  )
}
