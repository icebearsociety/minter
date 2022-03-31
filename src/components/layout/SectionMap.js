import "./css/section-map.css";

import roadDots from "../../assets/layers/roadmap lines.png";
import MediaQuery from "react-responsive";

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
            <div className="geo">
              <li>
                <h1
                  className="text-gradient"
                  text-align="center"
                  margin-right="auto"
                >
                  PHASE 0 : CUB
                </h1>
              </li>
            </div>
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
            <div className="geo">
              <li>
                <h1
                  className="text-gradient"
                  text-align="center"
                  margin-right="auto"
                >
                  PHASE 1 : ICED OUT
                </h1>
              </li>
            </div>
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
            <div className="geo">
              <li>
                <h1
                  className="text-gradient"
                  text-align="center"
                  margin-right="auto"
                >
                  Phase 2 : ARCTIC HABITAT
                </h1>
              </li>
            </div>
            <li className="text-gradient">
              Putting Forward Donation and Charity Models To All Holders
            </li>
            <li className="text-gradient">
              Selecting The Best Donation Strategies On Consensus Of The
              Community
            </li>
            <li className="text-gradient">
              Donating to World Wildlife Fund (WWF) & Saving Polar Bears In The
              Arctic
            </li>
            <li className="text-gradient">
              Personalised Certificates For All Holders Who Helped Saving The
              Future Of Polar Bears
            </li>
          </ul>
        </li>
        <li>
          <ul className="road-list-sec list-4">
            <div className="geo">
              <li>
                <h1
                  className="text-gradient"
                  text-align="center"
                  margin-right="auto"
                >
                  Phase 3 : BULLISH BEAR
                </h1>
              </li>
            </div>
            <li className="text-gradient">
              Establish Ice Bear Society DAO to give holders vote on Future
              Development Plans
            </li>
            <li className="text-gradient">
              Exclusive Giveaways and Confidential Perks For The Holders
            </li>
            <li className="text-gradient">
              Expand Charitable Aspects of Ice Bear Society
            </li>
            <li className="text-gradient">
              Supplemental Research & Development
            </li>
          </ul>
        </li>
      </ul>
    </section>
  );
};

export default SectionMap;
