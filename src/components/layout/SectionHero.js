import MediaQuery from "react-responsive";

import "./css/section-hero.css";

import snowMp4 from "../../assets/images/final-mo.webm";
// import snowWeb from "../../assets/images/simple.webm";
// import snowMp4Small from "../../assets/images/simple_small_c.mp4";
import snowWebSmall from "../../assets/images/Simple_2.webm";

// import wavyImg1Png from "../../assets/layers/hero-wavy1.png";
// import wavyImg1Web from "../../assets/layers/hero-wavy1.webp";
// import wavyImg2Png from "../../assets/layers/hero-wavy2.png";
// import wavyImg2Web from "../../assets/layers/hero-wavy2.webp";
// import wavyImg3 from "../../assets/layers/hero-wavy3.png";
import wavyImg4 from "../../assets/layers/hero-wavy4.png";
import MainNavigation from "./MainNavigation";

const SectionHero = () => {
  return (
    <section className="hero">
      {/* <video autoPlay loop muted playsInline className="snow-gif"> */}
      <video
        className="snow-gif"
        autoPlay
        loop
        muted
        playsInline
        preload="none"
      >
        <MediaQuery maxWidth={767}>
          <source src={snowMp4} type="video/webm" />
          {/* <source src={snowMp4Small} type="video/mp4" /> */}
        </MediaQuery>
        <MediaQuery minWidth={768}>
          <source src={snowWebSmall} type="video/webm" />
          {/* <source src={snowMp4} type="video/mp4" /> */}
        </MediaQuery>
      </video>
      <MainNavigation />

      <div className="wavy wavy-4">
        <img
          className="img-fluid"
          src={wavyImg4}
          // alt="pattern"
          width="100%"
          object-fit="cover"
        />
      </div>
    </section>
  );
};

export default SectionHero;
