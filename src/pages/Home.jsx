import CardContainer from '../components/CardContainer'
import { useDatabaseValue } from '@react-query-firebase/database'
import { ref } from 'firebase/database'
import { database } from '../config/firebase'

import Loading from './Loading'
import CardEmpty from '../components/CardEmpty'

const Home = () => {
  const { data, isLoading } = useDatabaseValue(
    ['userId'],
    ref(database, `userId/`),
    { subscribe: true, toArray: false },
    {
      keepPreviousData: true
    }
  )
  return (
    <>
      {isLoading == true ? (
        <Loading />
      ) : (
        <div className='h-[95vh] w-full'>
          <div className='flex h-full flex-row flex-wrap justify-evenly p-5'>
            {data === null ? (
              <CardEmpty />
            ) : (
              Object.entries(data).map((i) =>
                i[1] == undefined ? null : (
                  <CardContainer key={i[0]} sensorId={i[0]} data={i[1]} />
                )
              )
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default Home
