import _ from 'lodash'
import { HiOutlineDownload } from 'react-icons/hi'
import {
  FaHeartbeat,
  FaLungs,
  FaTemperatureHigh,
  FaHistory
} from 'react-icons/fa'
import timeFormatter from '../config/timeFormatter'

const ReportTable = ({ sensorId, data, maxRow }) => {
  const id = _.toNumber(sensorId)
  const nama = data.nama
  const nilai = Object.values(data.nilai)

  return (
    <div className='report-wrapper'>
      <div className='flex w-full flex-row justify-center p-2'>
        <div className='flex flex-col text-center'>
          <h2 className='text-2xl'>Ruang {id + 1}</h2>
          <h3 className='text-xl'>{nama}</h3>
        </div>
      </div>
      <div className='m-1 flex w-full rounded-xl bg-secondary-focus'>
        <table className='text-center'>
          <tbody>
            <tr>
              <th>
                <FaHistory className='relative left-1/2' />
              </th>
              <th>
                <FaHeartbeat className='relative left-1/2' />
              </th>
              <th>
                <FaLungs className='relative left-1/2' />
              </th>
              <th>
                <FaTemperatureHigh className='relative left-1/2' />
              </th>
            </tr>
            {nilai.slice(Math.max(nilai.length - `${maxRow}`, 0)).map((n) => (
              <tr>
                <td className='w-20'>{timeFormatter(n.timestamp)}</td>
                <td className='w-20'>{n.beat} bpm</td>
                <td className='w-20'>{n.spo2} %</td>
                <td className='w-20'>{n.temp} °C</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className='report-export-btn'>
        <HiOutlineDownload />
        <p>Export to CSV </p>
      </div>
    </div>
  )
}

export default ReportTable
