import Pin from '../../assets/Pin.svg';
import Email from '../../assets/Email.svg';
import Phone from '../../assets/Phone.svg';
import Instagram from '../../assets/Instagram.svg';
import Twitter from '../../assets/Twitter.svg';
import LinkedIn from '../../assets/Linkedin.svg';
import './style.css';
export default function Contact() {
  return (
    <div className="contactUsFooter" id="contactUs">
      <div className="contactUsTitle">
        <h1>Contact Us</h1>
        <p>Feel free to contact us for any queries</p>
      </div>
      <div className="contactUsInfo">
        <div className="contactUsElem">
          <img src={Email} alt="email" height={50} width={50} />
          <h1>Email</h1>
          <p>Contact us at our email Id</p>
          <p>
            <b>ossrndcentre@gmail.com</b>
          </p>
        </div>
        <div className="contactUsElem">
          <img src={Phone} alt="phone" height={50} width={50} />
          <h1>Phone</h1>
          <p>Contact us at our phone number</p>
          <p>
            <b>+91 96366 96170</b>
          </p>
          <p>
            <b>+91 96670 44835</b>
          </p>
        </div>
        <div className="contactUsElem">
          <img src={Pin} alt="lab" height={50} width={50} />
          <h1>Lab</h1>
          <p>Visit us at our lab</p>
          <a href="https://goo.gl/maps/62J4sEWHJ6m7bhUh6">
            <b>Project Lab 4th Floor CSIT Block</b>
          </a>
        </div>
      </div>
      <div className="contactUsSocials">
        <a>
          <img
            src={Instagram}
            alt="Instagram"
            className="contactUsSocialsElem"
          />
        </a>
        <a>
          <img src={Twitter} alt="Twitter" className="contactUsSocialsElem" />
        </a>
        <a>
          <img src={LinkedIn} alt="LinkedIn" className="contactUsSocialsElem" />
        </a>
      </div>
    </div>
  );
}
