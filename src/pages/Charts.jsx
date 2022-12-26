import _ from 'lodash'
import GenericBarChart from '../components/BarChart'
import Loading from '../pages/Loading'

import { ref } from 'firebase/database'
import { database } from '../config/firebase'
import { useDatabaseValue } from '@react-query-firebase/database'

const Charts = () => {
  const { data, isLoading } = useDatabaseValue(
    ['userId'],
    ref(database, 'userId'),
    { subscribe: true },
    {
      select: (data) => {
        const selectedData = Object.values(data).map((d) => d.nilai)
        const nilai = Object.values(selectedData).map((n) => Object.values(n))
        const result = nilai.map((r) => _.last(r))
        return result
      }
    }
  )
  // console.log(data)
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
