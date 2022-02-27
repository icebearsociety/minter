import SectionHero from "../components/layout/SectionHero";
import SectionBears from "../components/layout/SectionBears";
import SectionMint from "../components/layout/SectionMint";
import SectionPowered from "../components/layout/SectionPowered";
import SectionMap from "../components/layout/SectionMap";
import SectionTeam from "../components/layout/SectionTeam";
import SectionAbout from "../components/layout/SectionAbout";
import SectionFAQ from "../components/layout/SectionFAQ";
import Footer from "../components/layout/Footer";
import "../App.css";
import SectionCol from "../components/layout/SectionCol";

function Main() {
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

export default Main;
