import React from 'react'
import { UserContext } from '../../context/UserContext'
import { PhotoCommentsForm } from './PhotoCommentsForm';
import Styles from './PhotoComments.module.css';


interface PropsPhotoComments {
  id:number;
  comments: [{
    comment_ID:string,
    comment_author:string,
    comment_content:string;
  }];
  single:boolean;
}

export const PhotoComments = (props:PropsPhotoComments) => {
  const [comments, setComments] = React.useState(() => props.comments)
  const commentsSection = React.useRef<HTMLUListElement>(null)
  const {login} = React.useContext(UserContext)

  React.useEffect(() => {
    commentsSection.current!.scrollTop = commentsSection.current!.scrollHeight
  }, [comments])

  return (
    <>
      <ul ref={commentsSection} className={`${Styles.comments} ${props.single ? Styles.single: ''}`}>
        {comments.map((comentario) => (
          <li key={comentario.comment_ID}>
            <b>{comentario.comment_author}: </b>
            <span>{comentario.comment_content}</span>
          </li>
        ))}
      </ul>
      {login && <PhotoCommentsForm single={props.single} id={props.id} setComments={setComments}/>}
    </>
  )
}
