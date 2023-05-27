import AboutImg from '../../assets/About.png';
import AboutBlock from '../../assets/AboutBlock.png';
import './style.css';

export default function About() {
  return (
    <div className="about">
      <img src={AboutImg} alt="About" width={2144} height={693} />
      <div className="about-content">
        <img
          src={AboutBlock}
          alt="About Block about-elem"
          width={36}
          height={40}
        />
        <h1 className="about-text about-elem">About Us</h1>
        <p className="about-elem about-text-p">
          In the present day scenario, the open source software is replacing the
          proprietary software because of manifold advantages they have over
          proprietary software. Even though Free/Open Source Software (FOSS) is
          widely used, much of the computer science research community has yet
          to fully recognise its potential to change the world of research and
          developement of software intensive systems across disciplines.{' '}
        </p>
      </div>
    </div>
  );
}
