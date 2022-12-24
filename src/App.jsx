import { useDatabaseValue } from '@react-query-firebase/database'
import { ref } from 'firebase/database'
import { database } from './config/firebase'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

import Home from './pages/Home'
import Charts from './pages/Charts'
import History from './pages/History'
import Header from './components/Header'
import NotFound from './pages/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/charts' element={<Charts />} />
        <Route path='/history' element={<History />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
