import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import InquirePage from "./InquirePage"
import HeroSection from './HeroSection'
import Social from './Social'



const Home = () => {
  return (
    <>

      <Navbar />
      <HeroSection />
      <Social/>



      <InquirePage />
      <Footer />
    </>
  )
}

export default Home