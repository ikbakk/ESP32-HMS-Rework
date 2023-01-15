import _ from 'lodash'
import { useParams } from 'react-router-dom'
import { useDatabaseValue } from '@react-query-firebase/database'
import { ref } from 'firebase/database'
import { database } from '../../config/firebase'

import Detail from './Detail'
import Loading from './Loading'

const Details = () => {
  let { id } = useParams()
  const sensorId = _.toNumber(id)

  const { isLoading } = useDatabaseValue(
    [`userId/${sensorId}`],
    ref(database, `userId/${sensorId}`),
    { subscribe: true, toArray: false },
    {
      keepPreviousData: true
    }
  )
  return <>{isLoading ? <Loading /> : <Detail />}</>
}

export default Details
