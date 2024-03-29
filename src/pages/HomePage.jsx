import Footer from '@/components/home/Footer'
import HeroSection from '@/components/home/HeroSection'
import Navbar from '@/components/home/Navbar'
import OurServices from '@/components/home/OurServices'
import Testimonials from '@/components/home/Testimonials'
import WhyUs from '@/components/home/WhyUs'
import React from 'react'

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <OurServices />
      <Testimonials/>
      <WhyUs />
      <Footer />
    </div>
  )
}

export default HomePage