import { CSVLink } from 'react-csv'
import { HiOutlineDownload } from 'react-icons/hi'

import timeFormatter from '../config/timeFormatter'

const DownloadButton = ({ data, filename, title }) => {
  const headers = [
    { label: 'Data', key: 'timestamp' },
    { label: 'Heart Rate (bpm)', key: 'beat' },
    { label: 'SpO2 (%)', key: 'spo2' },
    { label: 'Temperature (°C)', key: 'temp' }
  ]

  const nilai = Object.values(data.nilai)
  const mapNilai = nilai.map((n) => {
    return {
      beat: n.beat,
      spo2: n.spo2,
      temp: n.temp,
      timestamp: timeFormatter(n.timestamp)
    }
  })
  return (
    <CSVLink
      data={mapNilai}
      headers={headers}
      separator=';'
      filename={filename}
      target='_blank'>
      <div className='flex flex-row items-center space-x-3'>
        <HiOutlineDownload
          className='download-button'
          size={22}
          title={title}
        />
        <p>Export to CSV</p>
      </div>
    </CSVLink>
  )
}

export default DownloadButton
