import React, { useRef } from 'react'
import './Testimonials.css'
import next from '../../assets/Right.png'
import back from '../../assets/Left.png'
import user1 from '../../assets/user1.jpg'
import user2 from '../../assets/user2.jpg'
import user3 from '../../assets/user3.jpg'
import user4 from '../../assets/user4.jpg'


const Testimonials = () => {

  const slider = useRef();
  let tx=0;


  const slideForword=()=>{
    if(tx > -50){
      tx-=25;
    }
    slider.current.style.transform=`translateX(${tx}%)`;
  }
  const slideBackward=()=>{
    if(tx < 0){
      tx+=25;
    }
    slider.current.style.transform=`translateX(${tx}%)`;
  }

  return (
    <div className='testimonials'>
      <img src={next} className='next-btn' onClick={slideForword}/>
      <img src={back} className='back-btn'onClick={slideBackward}/> 
    <div className='slider'>
      <ul ref={slider}>
        <li>
          <div className="slide">
            <div className="user-info">
              <img src={user1} alt="" className='user'/>
              <div>
                <h3>USer1</h3>
                <span>abc</span>
              </div>
            </div>
            <p> fhjihiuerhgiuehrgiuhertubhiobhiurhiujidasdw</p>
          </div>
        </li>
        <li>
          <div className="slide">
            <div className="user-info">
              <img src={user2} alt="" />
              <div>
                <h3>USer2</h3>
                <span>abc</span>
              </div>
            </div>
            <p> fhjihiuerhgiuehrgiuhertubhiobhiurhiujidasdw</p>
          </div>
        </li><li>
          <div className="slide">
            <div className="user-info">
              <img src={user3} alt="" />
              <div>
                <h3>USer3</h3>
                <span>abc</span>
              </div>
            </div>
            <p> fhjihiuerhgiuehrgiuhertubhiobhiurhiujidasdw</p>
          </div>
        </li><li>
          <div className="slide">
            <div className="user-info">
              <img src={user4} alt="" />
              <div>
                <h3>USer4</h3>
                <span>abc</span>
              </div>
            </div>
            <p> fhjihiuerhgiuehrgiuhertubhiobhiurhiujidasdw</p>
          </div>
        </li>
      </ul>
    </div>
    </div>
  )
}

export default Testimonials
