import React from 'react'
import Navbar from './pages/Navbar'
import HeroSection from './pages/HeroSection'
import OurServices from './pages/OurServices'
import WhyUs from './pages/WhyUs'
import Footer from './pages/Footer'

const App = () => {
  return (
    <div className='px-3 overflow-x-hidden'>
      <Navbar/>
      <HeroSection/>
      <OurServices/>
      <WhyUs/>
      <Footer/>
    </div>
  )
}

export default App