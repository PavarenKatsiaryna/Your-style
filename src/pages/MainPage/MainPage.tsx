import "./MainPage.css";
import back from "../../assets/bg1.jpg";
import graff from "../../assets/gr.png";
import { Link } from "react-router-dom";

export default function MainPage() {
  return (
    <>
      <div className="mainContainer">
        <img src={back} alt="bg1" className="back" />
        <div className="relativeContainer">
          <div className="topContainer">
            YOUR
            <div className="imgsleek"></div>
          </div>
          <div className="mediumContainer">
            <div className="imgloom"></div>
            STYLE
            <div className="buttonContainer">
              <img src={graff} alt="bg" className="gragg" />
              <Link className="buttonRing" to="/cataloge">
                SHOP NOW
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
