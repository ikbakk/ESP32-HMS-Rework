import { Routes, Route, BrowserRouter } from 'react-router-dom'

import Home from './components/pages/Home'
import Charts from './components/pages/Charts'
import History from './components/pages/History'
import Header from './components/Header'
import NotFound from './components/pages/NotFound'
import Detail from './components/pages/Detail'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/charts' element={<Charts />} />
        <Route path='/history' element={<History />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
