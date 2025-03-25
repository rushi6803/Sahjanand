import React from 'react'
import Navbar from './component/Navbar/Navbar'
import Hero from './component/Hero/Hero'
import Program from './component/Programs/Program'
import Title from './component/Title/Title'
import About from './component/About/About'
import Campus from './component/campus/Campus'
import Testimonials from './component/Testimonials/Testimonials'
import Contact from './component/Contact/Contact'
import Footer from './component/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='container'>
      </div>
      <Title subTitle='Our PROGRAM' title='What We Offer'/>
      <Program/>
      <About/>
      <Title subTitle='Gallery' title='Campus Photos'/>
      <Campus/>
      <Title subTitle='Testimonials' title='What Student Says'/>
      <Testimonials/>
      <Title subTitle='Contact US' title='Get in Touch'/>
      <Contact/>
      <Footer/>
     
    </div>
  )
}

export default App

