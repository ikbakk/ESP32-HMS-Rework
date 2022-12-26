import { useDatabaseValue } from '@react-query-firebase/database'
import { ref } from 'firebase/database'
import { database } from '../config/firebase'

import ReportTable from '../components/ReportTable'
import Loading from './Loading'

const History = () => {
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
        <div className='home-wrapper'>
          <div className='home-container'>
            {data === null ? (
              <CardEmpty />
            ) : (
              Object.entries(data).map((i) =>
                i[1] == undefined ? null : (
                  <ReportTable
                    key={i[0]}
                    sensorId={i[0]}
                    data={i[1]}
                    maxRow={5}
                  />
                )
              )
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default History
