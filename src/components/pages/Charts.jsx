import _ from 'lodash'
import GenericBarChart from '../BarChart'
import Loading from './Loading'

import { ref } from 'firebase/database'
import { database } from '../../config/firebase'
import { useDatabaseValue } from '@react-query-firebase/database'

const Charts = () => {
  const { data, isLoading } = useDatabaseValue(
    ['userId'],
    ref(database, 'userId'),
    { subscribe: true },
    {
      select: (data) => {
        const selectedData = Object.values(data)
          .map((d) => d)
          .filter((d) => d !== undefined)

        const nilai = Object.values(selectedData).map((n) => Object.values(n))
        const result = nilai.map((n) => {
          return {
            nama: n[0],
            beat: _.last(Object.values(n[1])).beat,
            spo2: _.last(Object.values(n[1])).spo2,
            temp: _.last(Object.values(n[1])).temp
          }
        })
        return result
      }
    }
  )
  return (
    <>
      {isLoading === true ? (
        <Loading />
      ) : (
        <div className='charts-wrapper'>
          <div className='chart-container'>
            <GenericBarChart
              data={data}
              dataKeyX='nama'
              syncId='anyId'
              dataKeyY='beat'
              barName='Heart Rate'
              unit=' bpm'
              fillColor='#41444B'
              bgcolor='#cabfab'
            />
          </div>
          <div className='chart-container'>
            <GenericBarChart
              data={data}
              dataKeyX='nama'
              syncId='anyId'
              dataKeyY='spo2'
              barName='SpO2'
              unit=' %'
              fillColor='#41444B'
              bgcolor='#cabfab'
            />
          </div>
          <div className='chart-container'>
            <GenericBarChart
              data={data}
              dataKeyX='nama'
              syncId='anyId'
              dataKeyY='temp'
              barName='Temperature'
              unit=' °C'
              fillColor='#41444B'
              bgcolor='#cabfab'
            />
          </div>
        </div>
      )}
    </>
  )
}

export default Charts
