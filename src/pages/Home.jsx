import { Link } from 'react-router-dom'
import CardContainer from '../components/CardContainer'

const Home = () => {
  const cards = [0, 1, 2, 3]
  return (
    <div className='w-full h-[95vh]'>
      <div className='flex flex-row h-full flex-wrap justify-evenly p-5'>
        {cards.map((card) => {
          return <CardContainer />
        })}
      </div>
    </div>
  )
}

export default Home
