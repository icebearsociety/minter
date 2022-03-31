import MediaQuery from "react-responsive";
import "./css/section-powered.css";

import poweredLayer1 from "../../assets/layers/powered1.png";
import poweredLayer2 from "../../assets/layers/powered2.png";
import poweredIconPng from "../../assets/images/powered-icon.png";
import poweredIconWeb from "../../assets/images/powered-icon.webp";

import mp4Bg from "../../assets/images/powered-bg.mp4";
import webBg from "../../assets/images/powered-bg.webm";
import mp4BgSmall from "../../assets/images/powered-bg-small.mp4";

import { Button } from "react-bootstrap";
import foxIcon from "../../assets/images/fox-icon.svg";

import discordIcon from "../../assets/images/discord.svg";

const SectionPowered = () => {
  return (
    <section className="section-powered">
      <video
        className="powered-gif"
        autoPlay
        loop
        muted
        playsInline
        preload="none"
      >
        <MediaQuery maxWidth={767}>
          <source src={mp4BgSmall} type="video/mp4" />
        </MediaQuery>
        <MediaQuery minWidth={768}>
          <source src={webBg} type="video/webm" />
          {/* <source src={mp4Bg} type="video/mp4" /> */}
        </MediaQuery>
      </video>
      <img
        className="powered-layer1 img-fluid"
        width="100%"
        object-fit="cover"
        src={poweredLayer1}
        alt=""
      />
      <picture>
        <source srcSet={poweredIconWeb} />
        <source srcSet={poweredIconPng} />
        <a href="https://fantom.foundation/">
          <img
            className="powered-icon img-fluid"
            src={poweredIconPng}
            alt="Powered by Fantom"
            // width="100%"
            // object-fit="cover"
          />
        </a>
      </picture>

      <img
        className="powered-layer2 img-fluid"
        width="100%"
        object-fit="cover"
        src={poweredLayer2}
        alt=""
      />
    </section>
  );
};

export default SectionPowered;
