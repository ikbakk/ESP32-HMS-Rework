import { TbDashboard } from 'react-icons/tb'
import { RiEditLine, RiCloseCircleLine } from 'react-icons/ri'

const CardContainer = () => {
  return (
    <div className='card w-52 h-72 m-5 bg-primary text-base-300 shadow-xl'>
      <div className='h-1/6 rounded-t-xl flex flex-row w-full justify-around text-2xl bg-white items-center'>
        <div className='w-1/4 flex justify-center'>
          <RiEditLine className='hover:cursor-pointer hover:bg-[#00000033] hover:rounded' />
        </div>
        <div className='w-2/4'>
          <h2 className='text-center '>Room</h2>
        </div>
        <div className='w-1/4 flex justify-center'>
          <RiCloseCircleLine className='hover:text-red-600 hover:cursor-pointer hover:bg-[#00000033] hover:rounded' />
        </div>
      </div>
      <div className=' h-5/6'>
        <h2 className='card-title'>Card title!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
      </div>
    </div>
  )
}

export default CardContainer
