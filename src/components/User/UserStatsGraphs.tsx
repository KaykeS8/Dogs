import React from 'react';
import Styles from './UserStatsGraphs.module.css';
import { VictoryPie, VictoryChart, VictoryBar } from 'victory'

export const UserStatsGraphs = ({ data }: any) => {

  const [graphs, setGraphs] = React.useState([]);
  const [total, setTotal] = React.useState(0);

  React.useEffect(() => {
    const graphData = data.map((item: any) => {
      return {
        x: item.title,
        y: Number(item.acessos)
      }
    })

    setTotal(data.map(({ acessos }: any) => Number(acessos)).reduce((a: any, b: any) => a + b))
    setGraphs(graphData)
  }, [data])

  return (
    <section className={`animeLeft ${Styles.graph}`}>
      <div className={`${Styles.total} ${Styles.graphItem}`}>
        <p>Acessos: {total}</p>
      </div>
      <div className={Styles.graphItem}>
        <VictoryPie data={graphs} padding={{ top: 20, bottom: 20, left: 80, right: 80 }} style={{
          data: {
            fillOpacity: 0.9,
            stroke: '#fff',
            strokeWidth: 2,
          },
          labels: {
            fontSize: 14,
            fill: '#333',
          }
        }} />
      </div>
      <div className={Styles.graphItem}>
        <VictoryChart>
          <VictoryBar alignment='start' data={graphs}/>
        </VictoryChart>
      </div>
    </section>
  )
}
