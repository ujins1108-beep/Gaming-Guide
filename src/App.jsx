import { Routes, Route, Navigate } from 'react-router-dom'
import Mainpage from './pages/mainpage/mainpage.jsx'
import Aboutpage from './pages/aboutpage/aboutpage.jsx'
import Header from './components/header/header.jsx'

function App() {
  return (
    <>
      <Header />
      
      <Routes>
        <Route path='/' element={<Navigate to='/main' />} />
        <Route path='/main' element={<Mainpage />} />
        <Route path='/about' element={<Aboutpage />} />
      </Routes>
    </>
  )
}

export default App
