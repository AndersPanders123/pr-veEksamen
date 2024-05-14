import logo from "/logo.png";
import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";

function Header() {
  return (
    <div>
      <div className="header">
        <img className="header" src={logo} alt="Logo" />
        <div className="row">
          <a href="#">
            <div className="headertxt">Ansatte</div>
          </a>
          <a href="#">
            <div className="headertxt">Kart</div>
          </a>
          <a href="#">
            <div className="headertxt">Om oss</div>
          </a>
        </div>
        <a className="header, icon">
          <a href="https://www.facebook.com">
            <CiFacebook size={50} />
          </a>
          <a href="https://www.instagram.com">
            <CiInstagram size={50} />
          </a>
          <a href="https://www.linkedin.com">
            <CiLinkedin size={50} />
          </a>
          <a href="https://www.twitter.com">
            <CiTwitter size={50} />
          </a>
        </a>
      </div>
    </div>
  );
}

export default Header;
