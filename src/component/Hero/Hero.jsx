import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark_arrow.png'
const Hero = () => {
  return (
    <div className='hero container'>
      <div className='hero-text'> 
        <h1> We Ensure Better Education for a Better World</h1>
        <p>Our cutting-edge curriculum is designed to empower students
           with the knowledge,skills and experiences 
           need to excel in the field of education</p>
           <button className='btn'>Explore More<img src={dark_arrow} alt=''></img></button>
      </div>
    </div>
  )
}

export default Hero
