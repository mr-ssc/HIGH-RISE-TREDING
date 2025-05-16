import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './component/Home'
import Navbar from './component/Navbar'
import Slider from './component/Slider'
import Footer from './component/Footer'
import Contact from './component/Contact'



function App() {
  return (
    <>

      <Routes>

        <Route path='/' element={<Home />}></Route>
        <Route path='/Navbar' element={<Navbar />}></Route>
        <Route path='Slider' element={<Slider/>}></Route>
        <Route path='/Contact' element={<Contact/>}></Route>


        
        <Route path='/Footer' element={<Footer/>}></Route>


      </Routes>




    </>

  );
}

export default App