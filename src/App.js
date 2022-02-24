import { useEffect } from "react";
import SectionHero from "./components/layout/SectionHero";
import SectionBears from "./components/layout/SectionBears";
import SectionMint from "./components/layout/SectionMint";
import SectionPowered from "./components/layout/SectionPowered";
import SectionMap from "./components/layout/SectionMap";
import SectionTeam from "./components/layout/SectionTeam";
import SectionAbout from "./components/layout/SectionAbout";
import SectionFAQ from "./components/layout/SectionFAQ";
import Footer from "./components/layout/Footer";
import "./App.css";
import Car from "./components/layout/Car";
import SectionCol from "./components/layout/SectionCol";
import { useDispatch, useSelector } from "react-redux";
import { loadMinterContract } from "./redux/minter-contract/minterActions";

function App() {
  const dispatch = useDispatch();
  const minterContract = useSelector((state) => state.minterContract);

  useEffect(() => {
    if (minterContract.contract === null) dispatch(loadMinterContract());
  }, [minterContract.contract]);

  return (
    <div className="App">
      <SectionHero />
      {/* <SectionBears /> */}
      <SectionMint />
      <SectionPowered />
      <SectionMap />
      <SectionTeam />
      <SectionAbout />
      <SectionCol />
      <SectionFAQ />
      <Footer />
    </div>
  );
}

export default App;
