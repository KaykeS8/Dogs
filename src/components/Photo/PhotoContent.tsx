import React from 'react'
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import { PhotoComments } from './PhotoComments';
import Style from './PhotoContent.module.css';
import { PhotoDelete } from './PhotoDelete';
import { Image } from '../Helpers/Image';


export const PhotoContent = ({ data, single }: any) => {

  const user = React.useContext(UserContext)
  const { comments, photo } = data
  return (
    <div className={`${Style.photo} ${single ? Style.single : ''}`}>
      <div className={Style.img}>
        <Image src={photo.src} alt={photo.title} />
      </div>
      <div className={Style.details}>
        <div>
          <p className={Style.author}>
            {user.data && user.data.username === photo.author ? <PhotoDelete id={photo.id} /> :
              <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
            }
            <span className={Style.visualizacoes}>{photo.acessos}</span>
          </p>
          <h1 className='title'>
            <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
          </h1>
          <ul className={Style.attributes}>
            <li>{photo.peso} kg</li>
            <li>{photo.idade === 1 ? photo.idade + ' ano' : photo.idade + ' anos'}</li>
          </ul>
        </div>
      </div>
      <PhotoComments single={single} id={photo.id} comments={comments} />
    </div>
  )
}
