import { RiAddLine } from 'react-icons/ri'

const CardEmpty = () => {
  return (
    <div className='card-empty-container'>
      <h1 className='text-2xl'>No Patient</h1>
      <div className='card-empty-add'>
        <RiAddLine size={56} />
        <h1 className='text-xl'>Add</h1>
      </div>
    </div>
  )
}

export default CardEmpty
