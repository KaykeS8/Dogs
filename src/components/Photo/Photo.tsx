import React from 'react'
import { useParams } from 'react-router-dom'
import { PHOTO_GET } from '../../api'
import { useFetch } from '../../hooks/useFetch'
import { Error } from '../Helpers/Error'
import { Head } from '../Helpers/Head'
import { Loading } from '../Helpers/Loading'
import { PhotoContent } from './PhotoContent'

export const Photo = () => {
  const { id } = useParams()
  const { data, error, loading, request } = useFetch();


  React.useEffect(() => {
    const { url, options } = PHOTO_GET(id!)
    request(url, options)
  }, [request, id])


  if (error) return <Error error={error} />
  if (loading) return <Loading />
  if (data)
    return (
      <section className='container mainContainer'>
        <PhotoContent single={true} data={data} />
      </section>
    )
  else return null
}