import React from 'react'
import { COMMENT_POST } from '../../api';
import { Enviar } from '../../Assets/Enviar';
import { useFetch } from '../../hooks/useFetch';
import { Error } from '../Helpers/Error';
import Styles from './PhotoCommentsForm.module.css';

interface PropsPhotoCommentsForm {
  id: number;
  setComments: (value: any) => void;
  single: boolean;
}

export const PhotoCommentsForm = ({ id, setComments, single }: PropsPhotoCommentsForm) => {
  const [comment, setComment] = React.useState('');


  const { request, error } = useFetch();

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const { url, options } = COMMENT_POST(id, { comment });
    const { response, json } = await request(url, options)

    if (response?.ok) {
      setComment('')
      setComments((comments: string[]) => [...comments, json])
    }
  }

  return (
    <form onSubmit={handleSubmit} className={`${Styles.form} ${single ? Styles.single : ''}`}>
      <textarea
        className={Styles.textarea}
        id="comment"
        name="comment"
        placeholder='Comente...'
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      />
      <button className={Styles.button}>
        <Enviar />
      </button>
      <Error error={error} />
    </form>
  )
}
