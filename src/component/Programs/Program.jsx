import React from 'react'
import './Program.css'
import program_1 from '../../assets/Program1.png'
import program_2 from '../../assets/Program2.png'
import program_3 from '../../assets/Program3.png'


const Program = () => {
  return (
    <div className='programs'>
      <div className="program">
        <img src={program_1} alt=''/>
        <p className='tag'>  Primary</p>
      </div>
      <div className="program">
        <img src={program_2} alt=''/>
        <p className='tag'>  Secondary</p>
      </div>
      <div className="program">
        <img src={program_3} alt=''/>
        <p className='tag'> Higher Secondary</p>
      </div>
    </div>
  )
}

export default Program
