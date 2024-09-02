import React from 'react'
import './Work.css'
import Portfolio1 from '../../assets/portfolio-1.png';
import Portfolio2 from '../../assets/portfolio-2.png';
import Portfolio3 from '../../assets/portfolio-3.png';
import Portfolio4 from '../../assets/portfolio-4.png';
import Portfolio5 from '../../assets/portfolio-5.png';
import Portfolio6 from '../../assets/portfolio-6.png';

const Works = () => {
  return (
    <section id="works">
        <h2 className="worksTitle">My Portfolio</h2>
        <span className='workDescription'>Hello, I’m Vishal Kumar, a Web developer passionate about
           creating engaging web applications.</span>
              <div className="workImages">
                <img src={ Portfolio1 } alt="" className="workimg" />
                <img src={Portfolio2} alt="" className="workimg" />
                <img src={Portfolio3} alt="" className="workimg" />
                <img src={Portfolio4} alt="" className="workimg" />
                <img src={Portfolio5}alt="" className="workimg" />
                <img src={Portfolio6} alt="" className="workimg" />
               
              </div>
              <button className='wbtn'>See More</button>
    </section>
  )
}

export default Works
