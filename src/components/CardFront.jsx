import { FaHeartbeat, FaLungs, FaTemperatureHigh } from 'react-icons/fa'

const CardFront = ({ beat, temp, spo2, nama }) => {
  return (
    <div className='h-full w-full space-y-1 rounded-b-xl p-2 font-hanken text-accent'>
      <div className='card-name'>
        <h3>{nama}</h3>
      </div>
      <div className='h-3/4'>
        <div className='grid grid-rows-3 items-center gap-4 px-3'>
          <div className='card-front-icon'>
            <FaHeartbeat size={24} />
            <p className='text-lg'>{beat[beat.length - 1]} bpm</p>
          </div>
          <div className='card-front-icon'>
            <FaLungs size={24} />
            <p className='text-lg'>{spo2[spo2.length - 1]} %</p>
          </div>
          <div className='card-front-icon'>
            <FaTemperatureHigh size={24} />
            <p className='text-lg'>{temp[temp.length - 1]} °C</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardFront
