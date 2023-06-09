import logo from '../../assets/oss_logo.png';
import './style.css';

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="top_logo">
        <img src={logo} alt="top_logo" />
      </div>
      <div className="links">
        <h3 className="link">Projects</h3>
        <h3 className="link">Events</h3>
        <h3 className="link">About Us</h3>
        <h3 className="link">Our Team</h3>
      </div>
      <div className="contactUs">
        <h3>Contact Us</h3>
      </div>
    </div>
  );
}
