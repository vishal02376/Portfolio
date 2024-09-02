import React from 'react';
import './S.css'
import UIDesign from '../../assets/ui-design.png';
import Webdesign  from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';



const Skils = () => {
  return (
    <div>
     <section id='Skils'>
      <span className="skilTitle"> What I do</span>
      <span className="skilDescription">
      I create dynamic web applications using React.js, focusing on user-friendly and efficient designs. My work
       includes projects like food delivery
       apps, to-do lists, and e-commerce sites. I’m dedicated to delivering high-quality, impactful solutions.
      </span>

      <div className="SkilsBars">
        <div className="skilbar">
            <img src={UIDesign} alt="" className="skilbarimg" />
            <div className="SkilbarText">
                <h2>UI/UX Design</h2>
                <p>Crafting intuitive and visually appealing user interfaces that enhance user experience and engagement.</p>
            </div>
        </div>

        <div className="skilbar">
            <img src={Webdesign} alt="" className="skilbarimg" />
            <div className="SkilbarText">
                <h2>Website Design</h2>
<p>Creating responsive and visually engaging websites tailored to meet your needs.</p>
            </div>
        </div>

        <div className="skilbar">
            <img src={AppDesign} alt="" className="skilbarimg" />
            <div className="SkilbarText">
                <h2>App Design</h2>
              <p>Designing user-friendly and visually appealing applications for seamless user experiences</p>
            </div>
        </div>
      </div>
        </section> 
    </div>
  )
}

export default Skils
