import _ from 'lodash'
import { useParams } from 'react-router-dom'
import { FaHeartbeat, FaLungs, FaTemperatureHigh } from 'react-icons/fa'
import { useDatabaseValue } from '@react-query-firebase/database'
import { ref } from 'firebase/database'
import { database } from '../../config/firebase'

import ReportTable from '../ReportTable'
import LineSeriesChart from '../LineChart'
import Loading from './Loading'
import TimeAgoLabel from '../TimeAgoLabel'

const Detail = () => {
  let { id } = useParams()
  const sensorId = _.toNumber(id)

  const { data } = useDatabaseValue(
    [`userId/${id}`],
    ref(database, `userId/${id}`),
    { subscribe: true, toArray: false },
    {
      keepPreviousData: true
    }
  )
  const nama = data.nama
  const nilai = Object.values(data.nilai)
  const beat = nilai.map((nilai) => nilai.beat)
  const spo2 = nilai.map((nilai) => nilai.spo2)
  const temp = nilai.map((nilai) => nilai.temp)
  const timestamp = nilai.map((nilai) => nilai.timestamp)
  return (
    <>
      <div className='flex w-full flex-col'>
        <div className='flex justify-center'>
          <div className='detail-header'>
            <p>Name: {nama}</p>
            <p>
              Updated <TimeAgoLabel date={_.last(timestamp)} />
            </p>
          </div>
        </div>
        <div className='detail-wrapper'>
          <div className='detail-readings'>
            <div className='detail-reading'>
              <div className='detail-reading-icon'>
                <h1>Heart Rate</h1>
                <FaHeartbeat size={80} />
                <p>{_.last(beat)} bpm</p>
              </div>
              <div className='detail-reading-chart'>
                <LineSeriesChart
                  data={nilai}
                  dataKeyX='timestamp'
                  dataKeyY='beat'
                  syncId='anyId'
                  fillColor='#41444B'
                  unit=' bpm'
                  lineName='Heart Rate'
                  tickStep={5}
                />
              </div>
            </div>
            <div className='detail-reading'>
              <div className='detail-reading-icon'>
                <h1>Oxygen Saturation</h1>
                <FaLungs size={80} />
                <p>{_.last(spo2)} %</p>
              </div>
              <div className='detail-reading-chart'>
                <LineSeriesChart
                  data={nilai}
                  dataKeyX='timestamp'
                  dataKeyY='spo2'
                  syncId='anyId'
                  fillColor='#41444B'
                  unit=' %'
                  lineName='Spo2'
                  tickStep={5}
                />
              </div>
            </div>
            <div className='detail-reading'>
              <div className='detail-reading-icon'>
                <h1>Temperature</h1>
                <FaTemperatureHigh size={80} />
                <p>{_.last(temp)} °C</p>
              </div>
              <div className='detail-reading-chart'>
                <LineSeriesChart
                  data={nilai}
                  dataKeyX='timestamp'
                  dataKeyY='temp'
                  syncId='anyId'
                  fillColor='#41444B'
                  unit=' °C'
                  lineName='Temperature'
                  tickStep={5}
                />
              </div>
            </div>
          </div>
          <div className='mx-2 hidden w-[25%] lg:block '>
            <ReportTable sensorId={sensorId} data={data} maxRow={25} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Detail
