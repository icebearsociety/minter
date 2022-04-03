import Web3 from "web3";
import store from "../store";
import MinterContract from "../../contract/MinterContract.json";

const loadContractRequest = () => {
  return {
    type: "LOAD_MINTER_CONTRACT_REQUEST",
  };
};

const loadContractSuccess = (payload) => {
  return {
    type: "LOAD_MINTER_CONTRACT_SUCCESS",
    payload: payload,
  };
};

const loadContractFailed = (payload) => {
  return {
    type: "LOAD_MINTER_CONTRACT_FAILED",
    payload: payload,
  };
};

const walletConnectionFailure = (payload) => {
  return {
    type: "WALLET_CONNECTION_FAILURE",
    payload: payload,
  };
};

const fetchCollectionSupplyRequest = () => {
  return {
    type: "FETCH_COLLECTION_SUPPLY_REQUEST",
  };
};

const fetchCollectionSupplySuccess = (payload) => {
  return {
    type: "FETCH_COLLECTION_SUPPLY_SUCCESS",
    payload: payload,
  };
};

const fetchCollectionSupplyFailed = (payload) => {
  return {
    type: "FETCH_COLLECTION_SUPPLY_FAILED",
    payload: payload,
  };
};

const fetchMyNFTs = () => {
  return {
    type: "FETCH_COLLECTION_MY_NFTS_REQUEST",
  };
};

const fetchMyNFTsSuccess = (payload) => {
  return {
    type: "FETCH_COLLECTION_MY_NFTS_SUCCESS",
    payload: payload,
  };
};

const fetchMyNFTsFailed = (payload) => {
  return {
    type: "FETCH_COLLECTION_MY_NFTS_FAILED",
    payload: payload,
  };
};

export const loadMinterContract = () => {
  return async (dispatch) => {
    dispatch(loadContractRequest());
    const { ethereum } = window;
    const metamaskIsInstalled = ethereum && ethereum.isMetaMask;

    if (metamaskIsInstalled) {
      let web3 = new Web3(ethereum);
      try {
        const accounts = await ethereum.request({
          method: "eth_requestAccounts",
        });
        const networkId = await ethereum.request({
          method: "net_version",
        });

        /* eslint eqeqeq: 0 */
        if (networkId == 250 || 4002) {
          const MinterContractObj = new web3.eth.Contract(
            MinterContract,
            `0xF33925C8F4C13ae138C8E7D159e950824990eA36`
          );
          dispatch(
            loadContractSuccess({
              account: accounts[0],
              contract: MinterContractObj,
              web3: web3,
            })
          );

          dispatch(fetchCirculatingSupply());
        } else {
          alert(`Please Connect To Fantom Network! [Chain ID: 420]`);

          dispatch(
            loadContractFailed(
              `Please Connect To Fantom Network! [Chain ID: 420]`
            )
          );
        }
      } catch (err) {
        alert("Please Log into metamsk!");
        dispatch(walletConnectionFailure("Something went wrong."));
      }
    } else {
      alert("Please Install Metamask on your device.");
      dispatch(walletConnectionFailure("Install Metamask."));
    }
  };
};

const updateSupply = async (_totalSupply) => {
  fetch(
    `https://api1.nftgarage.world/serve/supply/update-supply/icebearsociety`,
    {
      method: "POST",

      body: JSON.stringify({
        currentSupply: _totalSupply,
      }),

      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }
  ).catch((err) => console.log("Update Error"));
};

export const fetchCirculatingSupply = () => {
  return async (dispatch) => {
    dispatch(fetchCollectionSupplyRequest());

    try {
      // set timeout used to give sometime to the blockchain to update the minted supply before fetching it from the contract.
      setTimeout(async () => {
        try {
          // optional chain to avoid internal json rpc error (subjective)
          let currentSupply = await store
            .getState()
            .minterContract.contract?.methods.totalSupply()
            .call();

          updateSupply(currentSupply);

          dispatch(
            fetchCollectionSupplySuccess({
              circulatingSupply: currentSupply,
            })
          );
        } catch {
          alert(`Could not load updated data from contract. Please refresh.`);

          dispatch(
            fetchCollectionSupplyFailed("Could not load data from contract.")
          );
        }
      }, 5000);
    } catch (err) {
      dispatch(
        fetchCollectionSupplyFailed("Could not load data from contract.")
      );
    }
  };
};

export const fetchNfts = () => {
  return async (dispatch) => {
    dispatch(fetchMyNFTs());

    try {
      const userAccount = await store.getState().user.account;

      const nftsInWallet = await store
        .getState()
        .minterContract.contract.methods.walletOfOwner(userAccount)
        .call();

      let nftIds = nftsInWallet;
      let numberArray = nftIds.map(Number);

      fetch(
        `https://api1.nftgarage.world/serve/assets/icebearsociety/my-nfts`,
        {
          method: "POST",

          body: JSON.stringify({
            ownedTokens: [1, 2, 3],
          }),

          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      )
        .then((res) => res.json())
        .then((send) => dispatch(fetchMyNFTsSuccess([...send])))
        .catch((err) => console.log("Couldnt get Nfts"));
    } catch (err) {
      dispatch(
        fetchMyNFTsFailed("Something went wrong. Could not get your Nfts.")
      );
    }
  };
};
