import { useDatabaseValue } from '@react-query-firebase/database'
import { ref } from 'firebase/database'
import { database } from './config/firebase'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

import Home from './pages/Home'
import Charts from './pages/Charts'

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
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/charts' element={<Charts />} />
        <Route path='/history' element={<History />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
