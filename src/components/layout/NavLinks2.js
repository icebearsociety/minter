import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import foxIcon from "../../assets/images/fox-icon.svg";
import discordIcon from "../../assets/images/discord.svg";
import { useDispatch, useSelector } from "react-redux";
import { connect, disconnect } from "../../redux/user/userActions";
import { Link } from "react-router-dom";

import umbriaicon from "../../assets/images/UmbriaPretty.webp";
import heroicon from "../../assets/images/head-icon.webp";
import test1 from "../../assets/images/bear-claw2.png";



const WalletCard = () => {
  // const [userBalance, setUserBalance] = useState(null)
  const [connButtonText, setConnButtonText] = useState("Connect");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  // const data = useSelector(state => state.data)
  const account = user.account;
  useEffect(() => {
    if (account !== "") {
      if (account) {
        setConnButtonText(
          account.substring(0, 4) + "..." + account.substring(38, 42)
        );
      } else {
        setConnButtonText("Connect");
        dispatch(disconnect());
      }
    }
  }, [user.account, dispatch, account]);

  const handleConnectClick = (e) => {
    e.preventDefault();
    if (user.account === "") {
      dispatch(connect());
    } else {
      if (account) {
        alert(
          `You are already connected with wallet ${account}. If you wish to change it please use metamask.`
        );

        alert(
          `You are already connected with wallet ${account}. If you wish to change it please use metamask.`
        );
      } else {
        dispatch(connect());
      }
    }
  };

  return (
    <Button
      className="animate-btn btn"
      style={{
        height: "60px",
        marginLeft: "5px",
        backgroundColor: "#02b5ca",
        color: "white",
      }}
      onClick={handleConnectClick}
    >
      {connButtonText}
      <img src={foxIcon} className="fox-icon" alt="fox icon" />
    </Button>
  );
};

const NavLinks2 = (props) => {
  return (
    <ul className={`nav-menu ${props.className}`}>
      <li className="btn-collection row-list">
        <a href="https://discord.gg/xfYJtKzrby">
          <Button className="animate-btn">
            Join the Server{" "}
            <img
              src={discordIcon}
              className="discord-icon"
              height="45px"
              alt="join the discord"
            />
          </Button>
        </a>

        {/* <a href="https://bridge.umbria.network/bridge/ethereum-fantom/eth">
          <button className="animate-btn btn">
            Bridge to FTM!{" "}
            <img src={umbriaicon} className="fox-icon" alt="fox icon" />
          </button>
        </a> */}

        {/* <a className="animate-btn" href="#mint" onClick={props.onLinkClicked}>
          Mint
        </a> */}

        <a href="#mint" onClick={props.onLinkClicked}>
          <Button className="btn gradient-btn animate-btn">
            Mint{" "}
            <img
              src={heroicon}
              height="55px"
              className="fox-icon"
              // alt="join the discord"
            />
          </Button>
        </a>

        <Link className="animate-btn btn" to="/my-bears">
          My Bears
          <img
            src={test1}
            className="fox-icon"
            height="45px"
            // alt="join the discord"
          />
        </Link>

        <WalletCard />
      </li>
    </ul>
  );
};

export default NavLinks2;
