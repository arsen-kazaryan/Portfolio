import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Pages/Home/Home'
import About from './components/Pages/About/About'

function App() {

  return (
    <>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
    </Routes>
    </>
  )
}

export default App
