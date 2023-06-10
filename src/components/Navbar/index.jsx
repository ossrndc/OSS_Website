import logo from '../../assets/oss_logo.png';
import './style.css';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [hamburger, setHamburger] = useState(false);

  const handleHamburger = () => {
    setHamburger(!hamburger);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 968) {
        setHamburger(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="navbar">
      <div className="top_logo">
        <img src={logo} alt="top_logo" />
      </div>
      <div
        className={`hamburger ${hamburger ? '' : 'active'}`}
        onClick={handleHamburger}
      >
        <div className="hamburgerLine"></div>
        <div className="hamburgerLine"></div>
        <div className="hamburgerLine"></div>
      </div>
      <div className={`navbarMenu ${hamburger ? '' : 'show-menu'}`}>
        <div className="links">
          <a href="#events" className="section-link">
            <h3 className="link">Events</h3>
          </a>
          <a href="#about" className="section-link">
            <h3 className="link">About Us</h3>
          </a>
          <a href="#domains" className="section-link">
            <h3 className="link">Domains</h3>
          </a>
          <a href="#projects" className="section-link">
            <h3 className="link">Projects</h3>
          </a>
          <a href="#team" className="section-link">
            <h3 className="link">Our Team</h3>
          </a>
        </div>
        <div className="contactUs">
          <a href="#contactUs" className="contactUsLink">
            <h3>Contact Us</h3>
          </a>
        </div>
      </div>
    </div>
  );
}
