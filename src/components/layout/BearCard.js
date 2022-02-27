import React, { useState, Fragment } from "react";
import { Card, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import Modal from "react-bootstrap/Modal";

const BearCard = ({ myBears }) => {
  const [show, setShow] = useState(false);
  const [activeBear, setActiveBear] = useState(0);
  const [modalData, setModalData] = useState(null);

  const handleShowAttributes = (bearId, idx) => {
    console.log(myBears[idx]);
    const currentlyViewing = myBears[idx];

    if (!show) {
      setShow(true);
      setActiveBear(bearId);
      setModalData(currentlyViewing);
    }
  };

  return (
    <Fragment>
      {modalData && (
        <Modal
          show={show}
          size="lg"
          onHide={() => setShow(false)}
          dialogClassName="modal-90w"
          fullscreen="md"
        >
          <CustomModalHeader closeButton>
            <CustomModalTitle>Bear #{activeBear} </CustomModalTitle>
          </CustomModalHeader>

          <ModalBody>
            <Fragment>
              <img
                src={modalData.image}
                alt="stonk"
                style={{
                  width: "350px",
                  height: "350px",
                  marginBottom: "30px",
                  border: "1px solid #66aff5",
                }}
              />
              <div style={{ color: "black", marginLeft: "20px" }}>
                <P>
                  <Trait>Rarity:</Trait>&nbsp;{modalData?.attributes[0].value}
                </P>
                <br />
                <P>
                  <Trait>Mouth: </Trait>&nbsp; {modalData?.attributes[1].value}
                </P>
                <br />
                <P>
                  <Trait>Tops:</Trait>&nbsp; {modalData?.attributes[2].value}{" "}
                </P>
                <br />
                <P>
                  <Trait>Face:</Trait>&nbsp; {modalData?.attributes[3].value}
                </P>
                <br />
                <P>
                  <Trait>Head: </Trait>&nbsp; {modalData?.attributes[4].value}
                </P>
                <br />
                <P>
                  <Trait>Neck:</Trait>&nbsp; {modalData?.attributes[5].value}
                </P>
                <br />
                <P>
                  <Trait>Back</Trait>&nbsp; {modalData?.attributes[6].value}
                </P>
              </div>
            </Fragment>
          </ModalBody>
        </Modal>
      )}

      <Row xs={1} md={2} l={2} xl={3} className="g-5">
        {myBears.map((_, idx) => (
          <Col>
            <CustomCard border="secondary" className="glow">
              <CardImg variant="top" src={_.image} />
              <Card.Body>
                <CardWrap
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Card.Title style={{ color: "#66aff5" }}>
                    Bear #{_.tokenId}
                  </Card.Title>
                  <CardText rarity={_.attributes[0].value}>
                    {_.attributes[0].value}
                  </CardText>
                </CardWrap>
              </Card.Body>
              <CardFooter onClick={() => handleShowAttributes(_.tokenId, idx)}>
                See Attributes
              </CardFooter>
            </CustomCard>
          </Col>
        ))}
      </Row>
    </Fragment>
  );
};

export default BearCard;

const CustomCard = styled(Card)`
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px !important;
  border-radius: 20px !important;
  background-color: black !important;
  border: 1px solid #66aff5 !important;
`;

const CardImg = styled(Card.Img)`
  border-radius: 20px 20px 0 0 !important;
  border-bottom: 1px solid #66aff5 !important;
`;

const CardText = styled(Card.Text)`
  color: ${(props) =>
    props.rarity && props.rarity === "common"
      ? "#86dc3d"
      : props.rarity === "uncommon"
      ? "#66aff5"
      : props.rarity === "rare"
      ? "#a95aec"
      : props.rarity === "legendary"
      ? "#fcc201"
      : ""};
`;
const CardWrap = styled.div`
  display: flex;
  justifycontent: space-between;
`;

const CardFooter = styled(Card.Footer)`
  background-color: black;
  border-radius: 0 0 20px 20px !important;
  color: white !important;
  text-align: center;
  border-top: 1px dashed #66aff5 !important;

  :hover {
    background-color: #66aff5 !important;
    opacity: 0.6 !important;
    color: white !important;
  }
`;

const ModalBody = styled(Modal.Body)`
  display: flex;
  justify-content: space-between;
  background-color: black !important;
  border: 1px solid #66aff5;
  align-items: center;

  @media (max-width: 992px) {
    align-items: center;
    flex-direction: column;
  }
`;
const CustomModalHeader = styled(Modal.Header)`
  color: black !important;
  background: #66aff5;
  border-bottom: 1px solid black;
`;
const CustomModalTitle = styled(Modal.Title)`
  color: black !important;
`;

const P = styled.p`
  color: white !important;
  display: inline-block;
`;

const Trait = styled.span`
  color: #2a9df4 !important;
`;

const RarityText = styled.span`
  color: ${(props) =>
    props.rarity && props.rarity === "common"
      ? "#86dc3d"
      : props.rarity === "uncommon"
      ? "#66aff5"
      : props.rarity === "rare"
      ? "#a95aec"
      : props.rarity === "legendary"
      ? "#fcc201"
      : ""};
`;
