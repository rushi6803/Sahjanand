import React from 'react'
import './gallery.css'
import gallery1 from '../../assets/gallery1.png'
import gallery2 from '../../assets/gallery2.png'
import gallery3 from '../../assets/gallery3.png'
import gallery4 from '../../assets/gallery4.png'
const gallery = () => {
  return (
    <div className='main-galley'>
      <img src={gallery1} alt="" />
      <img src={gallery2} alt="" />
      <img src={gallery3} alt="" />
      <img src={gallery4} alt="" />
    </div>
  )
}

export default gallery
