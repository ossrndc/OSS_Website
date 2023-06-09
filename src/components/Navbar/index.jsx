import logo from '../../assets/oss_logo.png';
import './style.css';

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="top_logo">
        <img src={logo} alt="top_logo" />
      </div>
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
        <a href="" className="section-link">
          <h3 className="link">Projects</h3>
        </a>
        <a href="" className="section-link">
          <h3 className="link">Our Team</h3>
        </a>
      </div>
      <a href="#contactUs" className="contactUs">
        <div className="contactUs">
          <h3>Contact Us</h3>
        </div>
      </a>
    </div>
  );
}
