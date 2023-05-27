import DomainsImg from '../../assets/Domains.svg';
import Web from '../../assets/Web.svg';
import App from '../../assets/App.svg';
import Design from '../../assets/Design.svg';
import Cyber from '../../assets/Cyber.svg';
import './style.css';

export default function Domains() {
  return (
    <div className="domains">
      <img src={DomainsImg} className="domain-img" alt="Domains" />
      <div className="domains-content">
        <div className="domains-title">Our Domains</div>
        <div className="main-domains">
          <div className="domains-elem">
            <img src={Design} alt="Design" width={270} height={240} />
            <h3 className="domains-elem-text">Designing</h3>
          </div>
          <div className="domains-elem">
            <img src={Web} alt="Web" width={270} height={240} />
            <h3 className="domains-elem-text">Web Development</h3>
          </div>
          <div className="domains-elem">
            <img src={App} alt="App" width={270} height={240} />
            <h3 className="domains-elem-text">App Development</h3>
          </div>
          <div className="domains-elem">
            <img src={Cyber} alt="Cyber" width={270} height={240} />
            <h3 className="domains-elem-text">Cyber Security</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
