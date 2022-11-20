import React from 'react'
import { STATS_GET } from '../../api';
import { useFetch } from '../../hooks/useFetch'
import { Head } from '../Helpers/Head'
import { Loading } from '../Helpers/Loading';
import { Error } from '../Helpers/Error';
import { UserStatsGraphs } from './UserStatsGraphs';


export const UserStats = () => {

  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    async function getData() {
      const { url, options } = STATS_GET();
      await request(url, options)
    }
    getData()
  }, [request])

  console.log(data)

  if (loading) return <Loading />
  if (error) return <Error error={error} />
  if (data)
    return (
      <div>
        <Head title='Estatisticas' description='Página de estatisticas do perfil' />
        <UserStatsGraphs data={data}/>
      </div>
    )
  else return null
}
