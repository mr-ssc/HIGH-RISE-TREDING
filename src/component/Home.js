import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import InquirePage from "./InquirePage"
import HeroSection from './HeroSection'
import Social from './Social'
import New_Pro from './New_Pro'
import New_Info from './New_Info'



const Home = () => {
  return (
    <>

      <Navbar />
      <HeroSection />
      <Social />
      <New_Pro />
      <New_Info/>



      <InquirePage />
      <Footer />
    </>
  )
}

export default Home