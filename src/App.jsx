import { useDatabaseValue } from '@react-query-firebase/database'
import { ref } from 'firebase/database'
import { database } from './config/firebase'

function App() {
  const { data } = useDatabaseValue(
    ['userId'],
    ref(database, 'userId/'),
    { subscribe: true },
    {
      placeholderData: [
        {
          key: '',
          nama: 'tes',
          nilai: [{ beat: ' ', spo2: ' ', temp: ' ', timestamp: ' ' }]
        }
      ]
    }
  )
  return <div className='App'>aaa</div>
}

export default App
