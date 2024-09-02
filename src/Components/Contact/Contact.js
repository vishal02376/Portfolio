import React from 'react'
import './Contact.css'
import WalMaert from '../../assets/walmart.png';
import adobes from '../../assets/adobe.png';
import  microsoftss from '../../assets/microsoft.png';
import fb  from '../../assets/facebook.png';
import fbicon from '../../assets/facebook-icon.png'
import insta  from '../../assets/instagram.png';
import youtub from '../../assets/youtube.png';
import twitter from '../../assets/twitter.png';


const Contact = () => {
  return (
   <section id ='CotactPaage'>

<div id="clints">

    <h1 className="contactPageTitle">My Clints</h1>
    <p className="ClintDiscription">
    I’ve had the privilege of working with esteemed clients such as Flipkart, SAP India, Tech Mahindra, more.
     These experiences have allowed me to contribute to diverse projects and deliver impactful solutions.
    </p>

    <div className="Clintimgs">
        <img src={WalMaert} alt="CLint" className="clintimg" />
        <img src={adobes} alt="CLint" className="clintimg" />
        <img src={microsoftss} alt="CLint" className="clintimg" />
        <img src={fb} alt="CLint" className="clintimg" />
    </div>
 
</div>

<div id="contact">
  <h1 className="contactPageTitle">Contact Me</h1>
  <span className="ClintDiscription cll">Have a question or want to get in touch? Fill out the form below with your
     name, email, and message, and I’ll get back to you as soon as I can.</span>
     <form action="" className="ContactForm">
        <input type="text" className="name" placeholder='Your Name' />
        <input type="text" className="email" placeholder='Your Email' />
        <textarea className='msg' name="message"  rows= '5' placeholder='Your Message' ></textarea>
        <button type='submit' value= 'send' className='btnsubmit'>Submit</button>

        <div className="Links">
            <img src={ fbicon} alt="FaceBook" className="link" />
            <img src={insta} alt="Instagram" className="link" />
            <img src={youtub} alt="youtube" className="link" />
            <img src={twitter} alt="twitter" className="link" />
        </div>

     </form>
</div>

   </section>

  )
}

export default Contact
