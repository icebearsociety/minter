import "./css/section-mint.css";

import { useState } from "react";
import foxIcon from "../../assets/images/fox-icon.svg";
import { Spinner } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { connect } from "../../redux/user/userActions";
import { fetchCirculatingSupply } from "../../redux/minter-contract/minterActions";

import umbriaicon from "../../assets/images/UmbriaPretty.webp";
import headicon from "../../assets/images/head-icon.webp";

import MediaQuery from "react-responsive";

import hd from "../../assets/images/hodooi-img-2.png";
import nk from "../../assets/images/net-key.png";
import ape from "../../assets/images/ape.png";
import nftcal from "../../assets/images/nft-cal.png";
import paintswap from "../../assets/images/paint-swa.png";
import gar from "../../assets/images/gar-e.png";
import tofu from "../../assets/images/tofu.png";
import ftmwatch from "../../assets/images/ftmwatch.png";
import ani from "../../assets/images/ani.png";
import mu from "../../assets/images/mu.png";




import { Link } from "react-router-dom";

const SectionMint = () => {
  const [counter, setCounter] = useState(1);
  const [claimingNft, setClaimingNft] = useState(false);

  const minterContract = useSelector((state) => state.minterContract);
  const circulatingSupply = minterContract.circulatingSupply;
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);

  const isConnected = user.account !== null;

  const handleIncrement = (e) => {
    e.preventDefault();

    if (counter < 5) {
      setCounter(counter + 1);
    }
  };

  const handleDecrement = (e) => {
    e.preventDefault();
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  const showSpinner = () => {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  };

  const handleConnectClick = (e) => {
    e.preventDefault();
    if (user.account === "") {
      dispatch(connect());
    } else {
      if (user.account) {
        alert(
          `You are already connected with wallet ${user.account}. If you wish to change it please use metamask.`
        );

        alert(
          `You are already connected with wallet ${user.account}. If you wish to change it please use metamask.`
        );
      } else {
        dispatch(connect());
      }
    }
  };

  const mintNft = (e, _amount) => {
    e.preventDefault();
    if (_amount <= 0) {
      return;
    }
    setClaimingNft(true);
    minterContract.contract.methods
      .mint(user.account, _amount)
      .send({
        gasLimit: "750000",
        to: "0xF33925C8F4C13ae138C8E7D159e950824990eA36",
        from: user.account,
        value: minterContract.web3.utils.toWei(
          (33 * _amount).toString(),
          "ether"
        ),
      })
      .on("transactionHash", function (hash) {
        let txHash = hash;
        alert(`Transaction Sumbitted: ${txHash}`);
      })
      .on("error", (err) => {
        setClaimingNft(false);
        alert(`Couldn't process the transaction`);
      })
      .then((receipt) => {
        setClaimingNft(false);
        alert("Mint Successful!");
        dispatch(fetchCirculatingSupply());
      });
  };
  return (
    <section className="section-mint text-center" id="mint">
      <div className="heading-container">
        <h2 className="heading-secondary text-gradient">Mint your NFT!</h2>
      </div>

      <div className="mint-head">
        <h2 className="mint-title">
          {!minterContract.contract || !circulatingSupply
            ? showSpinner()
            : circulatingSupply
            ? circulatingSupply
            : null}
          /3333
        </h2>
      </div>
      {!isConnected && (
        <button
          className="btn gradient-btn animate-btn"
          onClick={handleConnectClick}
        >
          Connect to Metamask{" "}
          <img src={foxIcon} className="fox-icon" alt="fox icon" />
        </button>
      )}
      {isConnected && (
        <>
          <div className="cart">
            <button
              className="btn gradient-btn operation-btn"
              onClick={handleDecrement}
            >
              -
            </button>
            <p className="mint-counter">{counter}</p>
            <button
              className="btn gradient-btn operation-btn"
              onClick={handleIncrement}
            >
              +
            </button>
          </div>

          {!claimingNft ? (
            <button
              className="btn gradient-btn"
              onClick={(e) => mintNft(e, counter)}
              disabled={
                !isConnected ||
                !minterContract.contract ||
                !minterContract.circulatingSupply
              }
            >
              Mint
            </button>
          ) : (
            showSpinner()
          )}
        </>
      )}
      {/* <div>
        <a href="#mint">
          <button className="btn gradient-btn animate-btn">
            Coming Soon!{" "}
            <img src={foxIcon} className="fox-icon" alt="fox icon" />
          </button>
        </a>
      </div> */}

      <br></br>
      <br></br>
      <a href="https://bridge.umbria.network/bridge/ethereum-fantom/eth">
        <button className="btn gradient-btn animate-btn">
          Bridge to FTM!{" "}
          <img src={umbriaicon} className="fox-icon" alt="fox icon" />
        </button>
      </a>

      <br></br>
      <br></br>

      {/* <span class="tab"></span> */}

      {/* 
      <br></br>
      <br></br> */}

      {/* <a href="/my-bears">
        <button className="btn gradient-btn animate-btn">
          My Bears
        </button>
      </a> */}

      <Link className="btn gradient-btn animate-btn" to="/my-bears">
        My Bears
        <img src={headicon} className="fox-icon" alt="fox icon" />
      </Link>

      {/* <p className="mint-text">
        The Ice Bear Society is an NFT collection that strives to use the power
        of NFTs for good
      </p> */}
      <p className="mint-text">
        We have been Audited and Noted as "Low Risk Severity" - Guardian Audits.
        <br></br>
        {/* <br></br>Find the detailed report&nbsp; */}
        <a href="https://github.com/GuardianAudits/Audits/blob/main/IceBearSociety_Audit.pdf">
          Click here for the detailed report
        </a>
      </p>

      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <div className="heading-container">
        <h2 className="heading-secondary text-gradient">Featured on!</h2>

        <div class="container">
          <div className="pakaPaka">
            <div class="col-md-2 col-sm-7 team-wrap hypeBear">
              <div class="team-member text-center">
                <div class="team-img2">
                  <a href="https://blog.hodooi.com/ice-bear-society-announced-as-exclusive-nft-project-on-hodooi-com/">
                    <img className="team-img2 img-fluid" src={hd} />
                  </a>
                </div>
              </div>
            </div>

            <div class="col-md-2 col-sm-7 team-wrap hypeBear">
              <div class="team-member text-center">
                <div class="team-img2">
                  <a href="https://nftkey.app/collections/icebearsociety/">
                    <img className="team-img2 img-fluid" src={nk} />
                  </a>
                </div>
              </div>
            </div>

            <div class="col-md-2 col-sm-7 team-wrap">
              <div class="team-member text-center">
                <div class="team-img2">
                  <a href="https://www.apeoclock.com/launch/ice-bear-society-mint/">
                    <img className="team-img2 img-fluid" src={ape} />
                  </a>
                </div>
              </div>
            </div>

            <div class="col-md-2 col-sm-7 team-wrap">
              <div class="team-member text-center">
                <div class="team-img2">
                  <a href="https://paintswap.finance/marketplace/collections/0xf33925c8f4c13ae138c8e7d159e950824990ea36">
                    <img className="team-img2 img-fluid" src={paintswap} />
                  </a>
                </div>
              </div>
            </div>

            <div class="col-md-2 col-sm-7 team-wrap">
              <div class="team-member text-center">
                <div class="team-img2">
                  <a href="https://twitter.com/MahindraUni/status/1511620327746555905">
                    <img className="team-img2 img-fluid" src={mu} />
                  </a>
                </div>
              </div>
            </div>

            <div class="col-md-2 col-sm-7 team-wrap">
              <div class="team-member text-center">
                <div class="team-img2">
                  <a href="https://www.animationxpress.com/animation/mahindra-university-students-nft-project-focuses-on-preserving-polar-bears/">
                    <img className="team-img2 img-fluid" src={ani} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="pakaPaka">
            <div class="col-md-2 col-sm-7 team-wrap">
              <div class="team-member text-center">
                <div class="team-img2">
                  <a href="https://tofunft.com/collection/ice-bear-society/items">
                    <img className="team-img2 img-fluid" src={tofu} />
                  </a>
                </div>
              </div>
            </div>

            <div class="col-md-2 col-sm-7 team-wrap">
              <div class="team-member text-center">
                <div class="team-img2">
                  <a href="https://nftcalendar.io/event/ice-bear-society-the-mission-to-save-polar-bears-in-the-arctic/">
                    <img className="team-img2 img-fluid" src={nftcal} />
                  </a>
                </div>
              </div>
            </div>

            <div class="col-md-2 col-sm-7 team-wrap">
              <div class="team-member text-center">
                <div class="team-img2">
                  <a href="https://ftmwatch.com/ice-bear-society/">
                    <img className="team-img2 img-fluid" src={ftmwatch} />
                  </a>
                </div>
              </div>
            </div>

            <div class="col-md-2 col-sm-6 team-wrap">
              <div class="team-member text-center">
                <div class="team-img2">
                  <a href="https://nftgarage.world/fantom/icebearsociety">
                    <img className="team-img2 img-fluid" src={gar} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionMint;
