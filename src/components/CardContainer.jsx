import { TbDashboard } from 'react-icons/tb'
import { RiEditLine, RiCloseCircleLine } from 'react-icons/ri'
import CardFront from './CardFront'

const CardContainer = ({ data }) => {
  const id = data.id
  const nama = data.nama
  const nilai = Object.values(data.nilai)
  const beat = nilai.map((nilai) => nilai.beat)
  const spo2 = nilai.map((nilai) => nilai.spo2)
  const temp = nilai.map((nilai) => nilai.temp)
  const timestamp = nilai.map((nilai) => nilai.timestamp)
  return (
    <div className='card m-5 h-72 w-52 bg-secondary font-hanken shadow-xl outline outline-secondary-focus hover:cursor-pointer'>
      <div className='flex h-1/6 w-full flex-row items-center justify-between rounded-t-xl border-b-4 border-secondary-focus bg-success px-3'>
        <RiEditLine
          size={20}
          className='hover:cursor-pointer hover:rounded hover:bg-[#00000033]'
        />
        <h2 className='text-center text-2xl'>Room {id + 1}</h2>
        <RiCloseCircleLine
          size={20}
          className='hover:cursor-pointer hover:rounded hover:bg-[#00000033] hover:text-red-600'
        />
      </div>
      <div className='h-5/6 w-full'>
        <CardFront beat={beat} temp={temp} spo2={spo2} nama={nama} />
      </div>
    </div>
  )
}

export default CardContainer
