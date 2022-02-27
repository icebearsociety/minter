import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  loadMinterContract,
  fetchCirculatingSupply,
} from "./redux/minter-contract/minterActions";
import Main from "./pages/Main";
import MyBears from "./pages/MyBears";

function App() {
  const dispatch = useDispatch();
  const minterContract = useSelector((state) => state.minterContract);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (minterContract.contract === null) dispatch(loadMinterContract());
  }, [minterContract.contract]);

  useEffect(() => {
    dispatch(fetchCirculatingSupply());
  }, []);

  function fakeRequest() {
    return new Promise((resolve) => setTimeout(() => resolve(), 9500));
  }

  useEffect(() => {
    fakeRequest().then(() => {
      const el = document.querySelector(".loader-container");
      if (el) {
        el.remove();
        setLoading(!isLoading);
      }
    });
  }, []);

  if (isLoading) {
    return null;
  }

  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/my-bears" element={<MyBears />} />
      </Routes>
    </div>
  );
}

export default App;
