import "./css/section-bears.css";

import bearsLayer from "../../assets/layers/bears-layer.png";

import bearsWebS from "../../assets/images/bears-small.webp";
import bearsPngS from "../../assets/images/bears-small.png";
import bearsWebL from "../../assets/images/bears-large.webp";
import bearsPngL from "../../assets/images/bears-large.png";

const SectionBears = () => {
  return (
    <section className="section-bears">
      <picture>
        <source srcSet={bearsWebS} media="(max-width: 576px)" />
        <source srcSet={bearsPngS} media="(max-width: 576px)" />
        <source srcSet={bearsWebL} />
        <img className="img-fluid bears-img" src={bearsPngL} alt="nft bears" />
      </picture>
      <div className="bears-layer">
        <img src={bearsLayer} alt="" className="img-fluid" />
      </div>
    </section>
  );
};

export default SectionBears;
