import _ from 'lodash'
import { FaHeartbeat, FaLungs, FaTemperatureHigh } from 'react-icons/fa'

const CardBack = ({ beat, nama, spo2, temp, timestamp }) => {
  const statistics = (data) => {
    if (data === undefined) {
      return { maxData: '--', meanData: '--', minData: '--' }
    }
    const maxData = _.max(data)
    const minData = _.min(data)
    const avgData = _.toString(_.round(_.mean(data), 2))
    return { maxData, avgData, minData }
  }

  return (
    <div className='flex h-full w-full flex-col p-2 text-accent '>
      <div className='flex h-1/4 items-center justify-center text-center text-lg '>
        <h3>{nama}</h3>
      </div>
      <table className='h-3/4'>
        <tbody className='h-full'>
          <tr className='text-center'>
            <th></th>
            <th>Min</th>
            <th>Avrg</th>
            <th>Max</th>
          </tr>
          <tr className='text-center'>
            <td>
              <FaHeartbeat size={22} />
            </td>
            <td>{statistics(beat).minData}</td>
            <td>{statistics(beat).avgData}</td>
            <td>{statistics(beat).maxData}</td>
            <td className='text-right'>bpm</td>
          </tr>
          <tr className='text-center'>
            <td>
              <FaLungs size={22} />
            </td>
            <td>{statistics(spo2).minData}</td>
            <td>{statistics(spo2).avgData}</td>
            <td>{statistics(spo2).maxData}</td>
            <td className='text-right'>bpm</td>
          </tr>
          <tr className='text-center'>
            <td>
              <FaTemperatureHigh size={22} />
            </td>
            <td>{statistics(temp).minData}</td>
            <td>{statistics(temp).avgData}</td>
            <td>{statistics(temp).maxData}</td>
            <td className='text-right'>bpm</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default CardBack
