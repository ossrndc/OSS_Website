import Navbar from '../Navbar';
import Instagram from '../../assets/Instagram.png';
import Linkedin from '../../assets/Linkedin.png';
import Twitter from '../../assets/Twitter.png';
import oss_big_logo from '../../assets/oss_big_logo.png';
import SwipeUp from '../../assets/Swipe_Up.svg';
import './style.css';
import Ellipse from '../../assets/Ellipse.png';

export default function Home() {
  return (
    <div className="home">
      <Navbar />
      <div className="home_content">
        <div className="link_logos">
          <a href="https://www.instagram.com/team__oss/">
            <img src={Instagram} alt="Instagram" className="logo" />
          </a>
          <a href="https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Aorganization%3A68653099&keywords=team%20oss&origin=RICH_QUERY_TYPEAHEAD_HISTORY&position=0&searchId=7637ea0d-0a26-489f-b8fa-a14ba1b617f4&sid=~kH">
            <img src={Linkedin} alt="Linkedin" className="logo" />
          </a>
          <img src={Twitter} alt="Twitter" className="logo" />
        </div>
        <div className="oss_logo">
          <img src={oss_big_logo} alt="OSS Big Logo" />
        </div>
        <div className="swipeUp">
          <img src={SwipeUp} alt="Swipe Up" className="swipe_up" />
        </div>
      </div>
      <div className="ellipse">
        <img src={Ellipse} alt="Ellipse" height={1215} width={2200} />
      </div>
    </div>
  );
}
