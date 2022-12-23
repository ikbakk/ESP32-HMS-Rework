import { RiAddLine } from 'react-icons/ri'

const CardEmpty = () => {
  return (
    <div className='card m-5 flex h-72 w-52 items-center justify-center space-y-5 bg-secondary p-5 font-hanken text-accent shadow-xl outline outline-secondary-focus'>
      <h1 className='text-2xl'>No Patient</h1>
      <div className='flex h-3/4 w-3/4 flex-col items-center justify-center rounded-xl bg-primary hover:cursor-pointer hover:bg-primary-focus'>
        <RiAddLine size={56} />
        <h1 className='text-xl'>Add</h1>
      </div>
    </div>
  )
}

export default CardEmpty
