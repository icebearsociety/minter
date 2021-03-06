import { useEffect, useState } from "react";

import "./css/navigation-menu.css";

import MediaQuery from "react-responsive";
import { Container, Button } from "react-bootstrap";
import { Sling as Hamburger } from "hamburger-react";
import NavLinks from "./NavLinks";
import NavLinks2 from "./NavLinks2";



import discordIcon from "../../assets/images/discord.svg";
import heroicon from "../../assets/images/head-icon.webp";
import foxIcon from "../../assets/images/fox-icon.svg";
import logomain from "../../assets/images/logonew.svg";



const MainNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) document.body.classList.add("open-menu");
    else document.body.classList.remove("open-menu");
  }, [isMenuOpen]);

  const linkClickedHandler = () => setIsMenuOpen(false);


  return (
    <Container>
      <nav>
        <ul className="nav-links list-unstyled">
          <li>
            <a href="#">
              <img src={logomain} className="discord-icon" />
            </a>
          </li>
          {/* <li className="btn-collection column-list">
          <a href="https://discord.gg/xfYJtKzrby">
            <Button className="animate-btn">
              Join the Server{" "}
              <img
                src={discordIcon}
                className="discord-icon"
                alt="join the discord"
              />
            </Button> */}
          <MediaQuery minWidth={991}>
            <NavLinks2></NavLinks2>
          </MediaQuery>

          {/* </a> */}

          {/* </li> */}
          {/* <MediaQuery minWidth={992}>
            <li className="nav-right">
              <NavLinks />
            </li>
          </MediaQuery>
          <MediaQuery maxWidth={991}> */}
          <li>
            <Hamburger
              toggled={isMenuOpen}
              toggle={setIsMenuOpen}
              color="#fff"
            />
          </li>
          {isMenuOpen && (
            <NavLinks
              className="menu-open align-column"
              onLinkClicked={linkClickedHandler}
            />
          )}
          {/* </MediaQuery> */}
        </ul>
      </nav>
    </Container>
  );
};

export default MainNavigation;
