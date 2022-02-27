import React, { useEffect, Fragment, useState } from "react";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import BearCard from "../components/layout/BearCard";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { connect } from "../redux/user/userActions";
import { fetchNfts } from "../redux/minter-contract/minterActions";

const MyBears = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const minterContract = useSelector((state) => state.minterContract);
  const myBears = minterContract.myNfts;
  let stateLoading = minterContract.fetchingMyNfts;
  const [fetchedBears, setFetchedBears] = useState(false);

  useEffect(() => {
    dispatch(fetchNfts());
  }, [user.account]);

  var isConnected = user.account !== null;

  const handleConnect = (e) => {
    e.preventDefault();
    if (!isConnected) {
      if (user.account === null) {
        dispatch(connect());
      }
    }
  };

  if (isConnected) {
    if (!fetchedBears) {
      setFetchedBears(true);
    }
  }

  return (
    <Fragment>
      {stateLoading ? (
        <ItemText style={{ marginTop: "20vh" }}>loading..</ItemText>
      ) : (
        <Wrap>
          <br />
          <Link className="btn" to="/">
            GO BACK
          </Link>
          {user.account === null ? (
            <Fragment>
              <ItemText>
                <h2 className="heading-secondary text-gradient">My Bears</h2>
                <p>Connect your wallet</p>
              </ItemText>
              <button
                className="btn gradient-btn animate-btn"
                onClick={handleConnect}
              >
                Connect Wallet
              </button>
            </Fragment>
          ) : (
            <Fragment>
              <ItemText>
                <h2 className="heading-secondary text-gradient">My Bears </h2>

                <br />
                <p>Owning : {myBears.length}</p>
              </ItemText>
              <Container>
                <BearCard myBears={myBears} />
              </Container>
            </Fragment>
          )}

          <br />
          <br />
          <br />
        </Wrap>
      )}
    </Fragment>
  );
};

export default MyBears;

const Wrap = styled.div`
  width: 100vw;
  min-height: 100vh;
  height: auto;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ffa500;
`;

const ItemText = styled.div`
  padding: 15px;
  line-height: 35px;
  ${(props) => (!props.nftTitle ? "padding-top: 15vh;" : "padding-top:0;")};
  ${(props) => (props.nftTitle ? "padding-bottom: 0;" : "")};
  text-align: center;
  font-size: 25px;
  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const ConnectButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  border: ${(props) =>
    props.isConnected ? "solid 1px #86dc3d;" : "solid 1px red;"};
  height: 70px;
  width: 300px;
  color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 5px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: ${(props) => (!props.isConnected ? "20px;" : "15px;")};
  margin: 8px;

  &:hover {
    opacity: 0.65;
  }
`;
