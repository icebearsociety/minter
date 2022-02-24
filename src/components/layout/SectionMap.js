import './css/section-map.css';

import roadDots from '../../assets/layers/roadmap lines.png';
import MediaQuery from 'react-responsive';

const SectionMap = () => {
  return (
    <section className="section-map" id="roadmap">
      <div className="heading-container">
        <h2 className="heading-secondary text-gradient">The roadmap</h2>
      </div>
      <MediaQuery minWidth={767}>
        <img className="img-fluid road-dots" src={roadDots} alt="" />
      </MediaQuery>
      <ul className="container-narrow road-list">
        <li>
          <ul className="road-list-sec list-1">
            <li className="text-gradient">Create ICY Polar Bear Art</li>
            <li className="text-gradient">
              Marketing Impulse To Build A Robust Community
            </li>
            <li className="text-gradient">
              Giveaways For Early Supporters Of The Project
            </li>
            <li className="text-gradient">
              Collaboration with projects on the Fantom Ecosystem
            </li>
          </ul>
        </li>
        <li>
          <ul className="road-list-sec list-2">
            <li className="text-gradient">Updated Website Reveal</li>
            <li className="text-gradient">Announce Mint Price and Mint Day</li>
            <li className="text-gradient">Start Minting (& Sell Out!)</li>
            <li className="text-gradient">
              PaintSwap Collection Verification & Bot Integration
            </li>
          </ul>
        </li>
        <li>
          <ul className="road-list-sec list-3">
            <li className="text-gradient">Create ICY Polar Bear Art</li>
            <li className="text-gradient">
              Marketing Impulse To Build A Robust Community
            </li>
            <li className="text-gradient">
              Giveaways For Early Supporters Of The Project
            </li>
            <li className="text-gradient">
              Collaboration with projects on the Fantom Ecosystem
            </li>
          </ul>
        </li>
        <li>
          <ul className="road-list-sec list-4">
            <li className="text-gradient">Create ICY Polar Bear Art</li>
            <li className="text-gradient">
              Marketing Impulse To Build A Robust Community
            </li>
            <li className="text-gradient">
              Giveaways For Early Supporters Of The Project
            </li>
            <li className="text-gradient">
              Collaboration with projects on the Fantom Ecosystem
            </li>
          </ul>
        </li>
      </ul>
    </section>
  );
};

export default SectionMap;
