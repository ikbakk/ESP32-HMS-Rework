import { Link } from 'react-router-dom'
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
        {(data === undefined) | (data.length === 0) ? (
          <CardEmpty />
        ) : (
          data.map((data) => {
            return <CardContainer key={data.nama} data={data} />
          })
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
