import "./css/section-col.css";

import teamJpg from "../../assets/images/team.jpg";
import teamWeb from "../../assets/images/team.webp";
import topLayer from "../../assets/layers/team-top-layer.png";

import img1 from "../../assets/images/0001.png";
import img2 from "../../assets/images/0008.png";
import img3 from "../../assets/images/0009.png";
import img4 from "../../assets/images/0011.png";
import img5 from "../../assets/images/0013.png";
import img6 from "../../assets/images/0015.png";
import img7 from "../../assets/images/0013.png";
import img8 from "../../assets/images/0002.png";
import img9 from "../../assets/images/0003.png";
import img10 from "../../assets/images/0004.png";
import img11 from "../../assets/images/0005.png";
import img12 from "../../assets/images/0006.png";
import img13 from "../../assets/images/0007.png";
import img14 from "../../assets/images/0010.png";
import img15 from "../../assets/images/0011.png";

import { Button } from "react-bootstrap";
import foxIcon from "../../assets/images/fox-icon.svg";

import discordIcon from "../../assets/images/discord.svg";

const SectionCol = () => {
  return (
    <section className="section-team" id="team">
      {/* <img className="img-fluid teeam-top-layer" src={topLayer} alt="" /> */}
      <div className="heading-container">
        <h2 className="heading-secondary text-gradient">ICY Collection</h2>
      </div>
      {/* <div style={{ textAlign: "center", paddingLeft: "10rem" }}>
        <MDBCard style={{ maxWidth: "540px" }}>
          <MDBRow className="g-0">
            <MDBCol md="2">
              <MDBCardImage
                src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.webp"
                alt="..."
                fluid
              />
            </MDBCol>
            <MDBCol md="8">
              <MDBCardBody>
                <MDBCardTitle>Card title</MDBCardTitle>
                <MDBCardText>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </MDBCardText>
                <MDBCardText>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </MDBCardText>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>

          
        </MDBCard>
      </div> */}

      {/* <picture>
        <source srcSet={teamWeb} />
        <source srcSet={teamJpg} />
        <img
          className="team-img img-fluid"
          src={teamJpg}
          alt="the team members: Abhinav, Rahul, Geha, Rohit, Satvik, Aaryan"
        />
      </picture> */}

      <div class="container">
        <div class="row team-row">
          <div class="col-md-2 col-sm-5 team-wrap">
            <div class="team-member text-center">
              <div class="team-img">
                <img className="team-img img-fluid" src={img1} />
                <div class="overlay">
                  <div class="team-details text-center">
                    <div class="socials mt-20">
                      <a href="#">
                        <i class="fa fa-twitter"></i>
                      </a>
                      <a href="#">
                        <i class="fa fa-envelope"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* <h6 class="fi1-text">Common</h6> */}
              {/* <span className="fi-text">Public Relations</span> */}
            </div>
          </div>

          <div class="col-md-2 col-sm-5 team-wrap">
            <div class="team-member text-center">
              <div class="team-img">
                <img className="team-img img-fluid" src={img2} />
                <div class="overlay">
                  <div class="team-details text-center">
                    <div class="socials mt-20">
                      <a href="#">
                        <i class="fa fa-twitter"></i>
                      </a>
                      <a href="#">
                        <i class="fa fa-envelope"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* <h6 class="fi1-text">Rare</h6> */}
              {/* <span className="fi-text">Outreach</span> */}
            </div>
          </div>

          <div class="col-md-2 col-sm-5 team-wrap">
            <div class="team-member last text-center">
              <div class="team-img">
                <img className="team-img img-fluid" src={img3} />
                <div class="overlay">
                  <div class="team-details text-center">
                    <div class="socials mt-20">
                      <a href="#">
                        <i class="fa fa-twitter"></i>
                      </a>
                      <a href="#">
                        <i class="fa fa-envelope"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* <h6 class="fi1-text">Epic</h6> */}
              {/* <span className="fi-text">Digital Art</span> */}
            </div>
          </div>

          <div class="col-md-2 col-sm-5 team-wrap">
            <div class="team-member last text-center">
              <div class="team-img">
                <img className="team-img img-fluid" src={img4} />
                <div class="overlay">
                  <div class="team-details text-center">
                    <div class="socials mt-20">
                      <a href="#">
                        <i class="fa fa-twitter"></i>
                      </a>
                      <a href="#">
                        <i class="fa fa-envelope"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* <h6 class="fi1-text">Legendary </h6> */}
              {/* <span className="fi-text">Developer</span> */}
            </div>
          </div>

          <div class="col-md-2 col-sm-5 team-wrap">
            <div class="team-member last text-center">
              <div class="team-img">
                <img className="team-img img-fluid" src={img5} />
                <div class="overlay">
                  <div class="team-details text-center">
                    <div class="socials mt-20">
                      <a href="#">
                        <i class="fa fa-twitter"></i>
                      </a>
                      <a href="#">
                        <i class="fa fa-envelope"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* <h6 class="fi1-text">Founders</h6> */}
              {/* <span className="fi-text">Community</span> */}
            </div>
          </div>

          <div class="col-md-2 col-sm-5 team-wrap">
            <div class="team-member last text-center">
              <div class="team-img">
                <img className="team-img img-fluid" src={img11} />
                <div class="overlay">
                  <div class="team-details text-center">
                    <div class="socials mt-20">
                      <a href="#">
                        <i class="fa fa-twitter"></i>
                      </a>
                      <a href="#">
                        <i class="fa fa-envelope"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* <h6 class="fi1-text">Founders</h6> */}
              {/* <span className="fi-text">Community</span> */}
            </div>
          </div>

          <div class="col-md-2 col-sm-5 team-wrap">
            <div class="team-member last text-center">
              <div class="team-img">
                <img className="team-img img-fluid" src={img8} />
                <div class="overlay">
                  <div class="team-details text-center">
                    <div class="socials mt-20">
                      <a href="#">
                        <i class="fa fa-twitter"></i>
                      </a>
                      <a href="#">
                        <i class="fa fa-envelope"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* <h6 class="fi1-text">Founders</h6> */}
              {/* <span className="fi-text">Community</span> */}
            </div>
          </div>

          <div class="col-md-2 col-sm-5 team-wrap">
            <div class="team-member last text-center">
              <div class="team-img">
                <img className="team-img img-fluid" src={img9} />
                <div class="overlay">
                  <div class="team-details text-center">
                    <div class="socials mt-20">
                      <a href="#">
                        <i class="fa fa-twitter"></i>
                      </a>
                      <a href="#">
                        <i class="fa fa-envelope"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* <h6 class="fi1-text">Founders</h6> */}
              {/* <span className="fi-text">Community</span> */}
            </div>
          </div>

          <div class="col-md-2 col-sm-5 team-wrap">
            <div class="team-member last text-center">
              <div class="team-img">
                <img className="team-img img-fluid" src={img10} />
                <div class="overlay">
                  <div class="team-details text-center">
                    <div class="socials mt-20">
                      <a href="#">
                        <i class="fa fa-twitter"></i>
                      </a>
                      <a href="#">
                        <i class="fa fa-envelope"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* <h6 class="fi1-text">Founders</h6> */}
              {/* <span className="fi-text">Community</span> */}
            </div>
          </div>

          <div class="col-md-2 col-sm-5 team-wrap">
            <div class="team-member last text-center">
              <div class="team-img">
                <img className="team-img img-fluid" src={img11} />
                <div class="overlay">
                  <div class="team-details text-center">
                    <div class="socials mt-20">
                      <a href="#">
                        <i class="fa fa-twitter"></i>
                      </a>
                      <a href="#">
                        <i class="fa fa-envelope"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* <h6 class="fi1-text">Founders</h6> */}
              {/* <span className="fi-text">Community</span> */}
            </div>
          </div>

          <div class="col-md-2 col-sm-5 team-wrap">
            <div class="team-member last text-center">
              <div class="team-img">
                <img className="team-img img-fluid" src={img12} />
                <div class="overlay">
                  <div class="team-details text-center">
                    <div class="socials mt-20">
                      <a href="#">
                        <i class="fa fa-twitter"></i>
                      </a>
                      <a href="#">
                        <i class="fa fa-envelope"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* <h6 class="fi1-text">Founders</h6> */}
              {/* <span className="fi-text">Community</span> */}
            </div>
          </div>

          <div class="col-md-2 col-sm-5 team-wrap">
            <div class="team-member last text-center">
              <div class="team-img">
                <img className="team-img img-fluid" src={img6} />
                <div class="overlay">
                  <div class="team-details text-center">
                    <div class="socials mt-20">
                      <a href="#">
                        <i class="fa fa-twitter"></i>
                      </a>
                      <a href="#">
                        <i class="fa fa-envelope"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* <h6 class="fi1-text">Partnership</h6> */}
              {/* <span className="fi-text">Community</span> */}
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <div>
        <a href="#mint">
          <button className="btn gradient-btn animate-btn">
            Mint Our Collection{" "}
            <img src={foxIcon} className="fox-icon" alt="fox icon" />
          </button>
        </a>
      </div>
      <p className="mint-text">
        The following renders might not represent our final collection.
      </p>
      <img className="img-fluid teeam-top-layer" src={topLayer} alt="" />
    </section>
  );
};

export default SectionCol;
