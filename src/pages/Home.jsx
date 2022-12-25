import CardContainer from '../components/CardContainer'
import { useDatabaseValue } from '@react-query-firebase/database'
import { ref } from 'firebase/database'
import { database } from '../config/firebase'

import Loading from './Loading'
import CardEmpty from '../components/CardEmpty'

const Home = () => {
  const { data, isLoading } = useDatabaseValue(
    ['userId'],
    ref(database, 'userId'),
    {
      subscribe: true
    }
  )
  const ShowCards = () => {
    return (
      <>
        {data && data.length ? (
          data.map((data, index) => {
            return <CardContainer key={data.nama} index={index} data={data} />
          })
        ) : (
          <CardEmpty />
        )}
      </>
    )
  }

  return (
    <>
      {isLoading === true ? (
        <Loading />
      ) : (
        <div className='h-[95vh] w-full'>
          <div className='flex h-full flex-row flex-wrap justify-evenly p-5'>
            <ShowCards />
          </div>
        </div>
      )}
    </>
  )
}

export default Home
