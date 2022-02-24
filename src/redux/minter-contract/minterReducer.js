const initialState = {
  loading: false,
  contract: null,
  fetchingMyNfts: false,
  myNfts: [],
  circulatingSupply: null,
  web3: null,
  errorMsg: "",
};

const minterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_MINTER_CONTRACT_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "LOAD_MINTER_CONTRACT_SUCCESS":
      return {
        ...state,
        loading: false,
        contract: action.payload.contract,
        web3: action.payload.web3,
      };
    case "LOAD_MINTER_CONTRACT_FAILED":
      return {
        ...state,
        loading: false,
        errorMsg: action.payload,
      };

    case "WALLET_CONNECTION_FAILURE":
      return {
        ...state,
        loading: false,
        errorMsg: action.payload,
      };

    case "FETCH_COLLECTION_SUPPLY_REQUEST":
      return {
        ...state,
        loading: true,
      };

    case "FETCH_COLLECTION_SUPPLY_SUCCESS":
      return {
        ...state,
        loading: false,
        circulatingSupply: action.payload.circulatingSupply,
      };

    case "FETCH_COLLECTION_SUPPLY_FAILED":
      return {
        ...state,
        loading: false,
        error: true,
        errorMsg: action.payload,
      };

    case "FETCH_COLLECTION_MY_NFTS_REQUEST":
      return {
        ...state,
        fetchingMyNfts: true,
      };

    case "FETCH_COLLECTION_MY_NFTS_SUCCESS":
      return {
        ...state,
        fetchingMyNfts: false,
        myNfts: action.payload,
      };

    case "FETCH_COLLECTION_MY_NFTS_FAILED":
      return {
        ...state,
        fetchingMyNfts: false,
        errorMsg: action.payload,
      };

    default:
      return state;
  }
};

export default minterReducer;
