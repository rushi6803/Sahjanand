import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play.png'


const About = () => {
  return (
    <div className='about'>
      <div className='about-left'>
      <img src={about_img} className='about-img'/>
      
      </div>
      <div className='about-right'>
      <h3>About School </h3>
      <h2>Nurturing Tomorrow's Leaders Today</h2>
      <p> Sahjanand Vidyalaya is a premier institution dedicated to providing quality education 
that nurtures intellectual growth, moral values, and overall development. With 
a strong foundation in academic excellence and holistic learning, we strive to empower 
students with knowledge, creativity, and critical thinking skills. Our experienced faculty,
 modern infrastructure, and student-centric approach create an inspiring environment where
  young minds flourish. At Sahjanand Vidyalaya, we believe in fostering a culture of discipline
  , innovation, and ethical values to prepare our students for a bright future. Join us in our
   journey of shaping responsible and confident individuals
    who contribute positively to society.</p>
<p>At Sahjanand Vidyalaya, we believe in fostering curiosity, creativity, and a spirit 
    of inquiry among students. We encourage participation in co-curricular and extracurricular
     activities, promoting leadership, teamwork, and personal growth. Our mission is to cultivate
      responsible global citizens who are not only knowledgeable but also compassionate and ethical individuals.
       With a commitment to academic rigor and value-based education, we strive to shape the future leaders of tomorrow.</p>
       </div>
    </div>
  )
}

export default About
