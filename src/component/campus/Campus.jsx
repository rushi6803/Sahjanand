import React from 'react'
import './Campus.css'
import gallery1 from '../../assets/gallery1.jpg'
import gallery2 from '../../assets/gallery2.jpg'
import gallery3 from '../../assets/gallery3.jpg'
import gallery4 from '../../assets/gallery4.jpg'
import white from '../../assets/Right.png'

const Campus = () => {
  return (
    <div className='campus'>
      <div className='gallery'>
        <img src={gallery1}></img>
        <img src={gallery2}></img> 
        <img src={gallery3}></img> 
        <img src={gallery4}></img>
      </div>
      <button  className='btn dark-btn'>See More Here <img src={white}></img></button>
    </div>
  )
}

export default Campus
