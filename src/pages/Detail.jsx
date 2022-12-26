import _, { toNumber, last } from 'lodash'
import { useParams } from 'react-router-dom'
import { FaHeartbeat, FaLungs, FaTemperatureHigh } from 'react-icons/fa'
import { useDatabaseValue } from '@react-query-firebase/database'
import { ref } from 'firebase/database'
import { database } from '../config/firebase'

import ReportTable from '../components/ReportTable'
import LineSeriesChart from '../components/LineChart'
import Loading from './Loading'

const Detail = () => {
  let { id } = useParams()
  const sensorId = _.toNumber(id)

  const { data, isLoading } = useDatabaseValue(
    [`userId/${sensorId}`],
    ref(database, `userId/${sensorId}`)
  )
  const nama = data.nama
  const nilai = Object.values(data.nilai)
  const beat = nilai.map((nilai) => nilai.beat)
  const spo2 = nilai.map((nilai) => nilai.spo2)
  const temp = nilai.map((nilai) => nilai.temp)
  return (
    <>
      {isLoading === true ? (
        <Loading />
      ) : (
        <div className='flex w-full flex-col'>
          <div className='justify-center'>
            <div>{id}</div>
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
            <div className='mx-2 w-[25%] '>
              <ReportTable sensorId={sensorId} data={data} maxRow={25} />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Detail
