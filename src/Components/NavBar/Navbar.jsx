import React, { useState } from 'react';
import './Nav.css';
import logo from '../../assets/logo.png';
import contactimg from '../../assets/contact.png';
import { Link } from 'react-scroll';
import menu from '../../assets/menu.png';

const Navbar = () => {
  const [showMenu, setMenu] = useState(false); // Fixing the useState hook

  return (
    <div>
      <nav className="navBar">
        <img className='logo' src={logo} alt=""  />

        <div className="DesktopMenu">
          <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="Menuitem">Home</Link>
          <Link activeClass='active' to='Skils' spy={true} smooth={true} offset={-50} duration={500} className="Menuitem">About</Link>
          <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className="Menuitem">Portfolio</Link>
          <Link activeClass='active' to='clints' spy={true} smooth={true} offset={-50} duration={500} className="Menuitem">Clients</Link>
        </div>

        <button className="DesktopMenuBotton" onClick={() => {
          document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
        }}>
          <img src={contactimg} alt="" className='DesktopMeniIcon' />Contact Me
        </button>

        {/*------------ Responsive---------------------------------------------------------------------------- */}

        <img className='MobileMenu' src={menu} alt="" onClick={() => setMenu(!showMenu)} />

        <div className="NavMenu" style={{ display: showMenu ? 'flex' : 'none' }}>
          <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="Listitem" onClick={() => setMenu(false)}>Home</Link>
          <Link activeClass='active' to='Skils' spy={true} smooth={true} offset={-50} duration={500} className="Listitem" onClick={() => setMenu(false)}>About</Link>
          <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className="Listitem" onClick={() => setMenu(false)}>Portfolio</Link>
          <Link activeClass='active' to='clints' spy={true} smooth={true} offset={-50} duration={500} className="Listitem" onClick={() => setMenu(false)}>Clients</Link>
          <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className="Listitem" onClick={() => setMenu(false)}>Contact</Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
