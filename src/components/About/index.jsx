import AboutImg from '../../assets/About.png';
import AboutBlock from '../../assets/AboutBlock.png';
import './style.css';

export default function About() {
  return (
    <div className="about" id="about">
      <img src={AboutImg} alt="About" className="about-img" />
      <div className="about-content">
        <img src={AboutBlock} alt="About Block" className="about-block-img" />
        <h1 className="about-text">About Us</h1>
        <p className="about-text-p">
          In the present day scenario, the open source software is replacing the
          proprietary software because of manifold advantages they have over
          proprietary software. Even though Free/Open Source Software (FOSS) is
          widely used, much of the computer science research community has yet
          to fully recognize its potential to change the world of research and
          development of software-intensive systems across disciplines.
        </p>
      </div>
    </div>
  );
}
