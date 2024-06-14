import MainPage from "../MainPage/MainPage";
import StyleRedefinedPage from "../StyleRedefinedPage/StyleRedefinedPage";
import GetTheLookPage from "../GetTheLookPage/GetTheLookPage";
import StyleFusionPage from "../StyleFusionPage/StyleFusionPage";
import AboutUsPage from "../AboutUsPage/AboutUsPage";
import FooterPage from "../FooterPage/FooterPage";
import Slider from "../../components/Slider/Slider";

export default function LendingPage() {
  return (
    <>
      <MainPage></MainPage>
      <Slider></Slider>
      <StyleRedefinedPage></StyleRedefinedPage>
      <GetTheLookPage></GetTheLookPage>
      <StyleFusionPage></StyleFusionPage>
      <AboutUsPage></AboutUsPage>
      <FooterPage></FooterPage>
    </>
  );
}
