import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './component/Home'
import Navbar from './component/Navbar'
import Slider from './component/Slider'
import Footer from './component/Footer'
import Contact from './component/Contact'
import Download from './component/Download'
import About from './component/About'
import Brand from './component/Brand'
import Products from './component/Products'
import Industries from './component/Industries'
import CompanyOverview from "./component/CompanyOverview"
import CompanyInfo from "./component/CompanyInfo"
import AboutTestimonials from "./component/AboutTestimonials"
import CustomerSetisfaction from "./component/CustomerSetisfaction"
import EsteemadeBrand from "./component/EsteemadeBrand"
import InquirePage from "./component/InquirePage"
import Cart from './component/Cart'
import HeroSection from './component/HeroSection'
import Social from './component/Social'
import New_Pro from './component/New_Pro'
import New_Info from './component/New_Info'






function App() {
  return (
    <>

      <Routes>

        <Route path='/' element={<Home />}></Route>
        <Route path='/Navbar' element={<Navbar />}></Route>
        <Route path='Slider' element={<Slider />}></Route>
        <Route path='/Contact' element={<Contact />}></Route>
        <Route path='/Download' element={<Download />}></Route>
        <Route path='/About' element={<About />}></Route>
        <Route path='/Brand' element={<Brand />}></Route>
        <Route path='/Products' element={<Products />}></Route>
        <Route path='/Industries' element={<Industries />}></Route>
        <Route path='/CompanyOverview' element={<CompanyOverview />}></Route>
        <Route path='/CompanyInfo' element={<CompanyInfo />}></Route>
        <Route path='/AboutTestimonials' element={<AboutTestimonials />}></Route>
        <Route path='/CustomerSetisfaction' element={<CustomerSetisfaction />}></Route>
        <Route path='/EsteemadeBrand' element={<EsteemadeBrand />}></Route>
        <Route path='/InquirePage' element={<InquirePage />}></Route>
        <Route path='/Cart' element={<Cart />}></Route>
        <Route path='/HeroSection' element={<HeroSection />}></Route>
        <Route path='/Social' element={<Social />}></Route>
        <Route path='/New_Pro' element={<New_Pro />}></Route>
        <Route path='/New_Info' element={<New_Info/>}></Route>



        <Route path='/Footer' element={<Footer />}></Route>


      </Routes>




    </>

  );
}

export default App