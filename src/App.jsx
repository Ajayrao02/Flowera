import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contactt from './Pages/Contactt'
import Gallery from './Pages/Gallery'
import Shop from './Pages/Shop'
import './App.css'

const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contactt/>} />
        <Route path='/gallery' element={<Gallery/>} />
        <Route path='/shop' element={<Shop/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App