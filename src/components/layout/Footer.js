import './css/footer.css';

import layer from '../../assets/layers/hero-wavy2.png';
import headIconPng from '../../assets/images/head-icon.png';
import headIconWeb from '../../assets/images/head-icon.webp';
import twitterIcon from '../../assets/images/twitter-icon.png';
import instaIcon from '../../assets/images/insta-icon.png';
import discordIcon from '../../assets/images/discord-icon.png';

const Footer = () => {
  return (
    <footer className="footer">
      <img className="img-fluid footer-layer" src={layer} alt="" />
      <ul className="footer-icons list-unstyled">
        <li>
          <a href="https://discord.gg/xfYJtKzrby">
            <img className="social-icon" src={discordIcon} alt="discord" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/icebearsociety/">
            <img className="social-icon" src={instaIcon} alt="instagram" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/icebearsociety">
            <img className="social-icon" src={twitterIcon} alt="twitter" />
          </a>
        </li>
      </ul>
      <ul className="footer-links list-unstyled">
        <li>
          <a
            className="animate-link"
            href="https://www.privacypolicygenerator.info/live.php?token=pT62BCzzqqS96oGcTJeBm2p5BLIEKh1h"
          >
            Privacy policy
          </a>
        </li>
        <li>
          <a
            className="animate-link"
            href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
          >
            All rights reserved
          </a>
        </li>
        <li>
          <a
            className="animate-link"
            href="https://www.termsandconditionsgenerator.com/live.php?token=eGc3TZZzodDVofQYEXdc1Oq1eucMow4g"
          >
            Terms and conditions
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
