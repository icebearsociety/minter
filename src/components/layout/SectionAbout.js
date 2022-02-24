import './css/section-about.css';

import layer from '../../assets/layers/about.png';

const SectionAbout = () => {
  return (
    <section className="section-about" id="about">
      <img className="img-fluid about-layer" src={layer} alt="" />
      <div className="about-container">
        <div className="heading-container">
          <h2 className="heading-secondary text-gradient">About us</h2>
        </div>
        <p className="about-text">
          3,333 unique & randomly generated Ice Bears on the Fantom Blockchain,
          looking to disrupt the NFT ecosystem to the protect the ice bears from
          going extinct!
          <br></br>
          <a href="https://www.worldwildlife.org/species/polar-bear">
            <button className="btn gradient-btn animate-btn">
              Learn More about Polar Bears{" "}
            </button>
          </a>
          <br></br>
          <a href="https://gifts.worldwildlife.org/gift-center/gifts/Species-Adoptions/Polar-Bear.aspx?sc=AWY2005OQ18318A03785RX&_ga=2.73483483.85685908.1645626054-120983351.1642958266">
            <button className="btn gradient-btn animate-btn">
              Adopt a Polar Bear{" "}
            </button>
          </a>
        </p>
      </div>
    </section>
  );
};

export default SectionAbout;
