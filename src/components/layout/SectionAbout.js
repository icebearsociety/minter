import "./css/section-about.css";

import layer from "../../assets/layers/about.png";

import MediaQuery from "react-responsive";

import foxIcon from "../../assets/images/fox-icon.svg";
import snow from "../../assets/images/12.svg";

const SectionAbout = () => {
  return (
    <section className="section-about" id="about">
      <img
        className="img-fluid about-layer"
        width="100%"
        object-fit="cover"
        src={layer}
        alt=""
      />
      <div className="about-container">
        <div className="heading-container">
          <h3 className="heading-secondary text-gradient">About us</h3>
          <p className="about-text">
            3,333 unique & randomly generated Ice Bears on the Fantom
            Blockchain, looking to disrupt the NFT ecosystem to the protect the
            ice bears from going extinct!
            <br></br>
            {/* 3333 Ice Bears | 33 FTM | Starts at April 5th at 3.33 PM UTC <br></br>33% towards the Polar Bears */}
            <br></br>
            <MediaQuery minWidth={768}>
              <a href="https://www.worldwildlife.org/species/polar-bear">
                <button className="btn gradient-btn animate-btn">
                  Learn More about Polar Bears{" "}
                  {/* <img src={snow} className="fox-icon" alt="fox icon" /> */}
                </button>
              </a>
              <br></br>
              {/* <a href="https://gifts.worldwildlife.org/gift-center/gifts/Species-Adoptions/Polar-Bear.aspx?sc=AWY2005OQ18318A03785RX&_ga=2.73483483.85685908.1645626054-120983351.1642958266" className="abandoned">
                <button className="btn gradient-btn animate-btn d">
                  Adopt a Polar Bear{" "}
                  <img src={snow} className="fox-icon" alt="fox icon" />
                </button>
              </a> */}
            </MediaQuery>
            <MediaQuery maxWidth={768}>
              {/* <a href="https://www.worldwildlife.org/species/polar-bear">
                <button className="btn gradient-btn animate-btn">
                  Learn More about Polar Bears{" "}
                  <img src={snow} className="fox-icon" alt="fox icon" />
                </button>
              </a> */}
              <br></br>
              <br></br>
              {/* <a href="https://gifts.worldwildlife.org/gift-center/gifts/Species-Adoptions/Polar-Bear.aspx?sc=AWY2005OQ18318A03785RX&_ga=2.73483483.85685908.1645626054-120983351.1642958266">
                <button className="btn gradient-btn animate-btn abandoned">
                  Adopt a Polar Bear{" "}
                  <img src={snow} className="fox-icon" alt="fox icon" />
                </button>
              </a> */}
            </MediaQuery>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionAbout;
