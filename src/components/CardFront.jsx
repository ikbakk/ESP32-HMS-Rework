import { FaHeartbeat, FaLungs, FaTemperatureHigh } from 'react-icons/fa'
import { MdOutlineKeyboardReturn, MdDeleteSweep } from 'react-icons/md'

const CardFront = () => {
  return (
    <div className='h-full w-full space-y-1 rounded-b-xl p-2 text-accent'>
      <div className='flex h-1/4 items-center justify-center text-center text-lg '>
        <h3>Max 35 Chars adasdas asdijasd</h3>
      </div>
      <div className='h-3/4'>
        <div className='grid grid-rows-3 items-center gap-4 px-3'>
          <div className='flex flex-row items-center justify-between'>
            <FaHeartbeat size={24} />
            <p className='text-lg'>20 bpm</p>
          </div>
          <div className='flex flex-row items-center justify-between'>
            <FaLungs size={24} />
            <p className='text-lg'>20 %</p>
          </div>
          <div className='flex flex-row items-center justify-between'>
            <FaTemperatureHigh size={24} />
            <p className='text-lg'>20 C</p>
          </div>
        </div>
        <div className='flex h-1/4 w-full flex-row items-end justify-between'>
          <MdDeleteSweep size={20} />
          <p>between</p>
          <MdOutlineKeyboardReturn size={20} />
        </div>
      </div>
    </div>
  )
}

export default CardFront
