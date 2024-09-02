import React from 'react'
import './Intro.css'
import bg from '../../assets/W.png'
import btn from '../../assets/hireme.png'
import {Link } from 'react-scroll';

const Intro = () => {
  return (
    <>
    <section id="intro">
        <div className="IntroContent">
       <span className="Hello">Hello</span>
       <span className="ittroText">I'm <span className='introName'>Vishal</span> <br /> Software Developers</span>
       <p className='Intropara'>A passionate Software Developer with a strong foundation <br /> in  C++,  JavaScript, React.js, Node Js, and  MongoDB</p>

<Link><button className="btnsss"><img src={btn} alt="Hire me"className='btnimgsss'  />Hire Me</button></Link>

        </div>
        <img src = {bg} alt="" className='bg'/>
    </section>
    
     </>
  )
}

export default Intro
