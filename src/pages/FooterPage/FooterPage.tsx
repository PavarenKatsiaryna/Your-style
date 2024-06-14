import "./FooterPage.css";
import { FaInstagram } from "react-icons/fa6";
import { BsFacebook } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa6";
import Input from "../../components/Input/Input";

export default function FooterPage() {
  return (
    <>
      <div className="footerContainer">
        <div className="nameCont">Your style</div>
        <div className="textCont">
          <div className="columnOne">
            <div className="">Shipping and Payment methods </div>
            <div className="">Returns and refunds</div>
            <div className="">Contacts</div>
          </div>
          <div className="columnTwo">
            <div className="">About Us</div>
            <div className="">Stores</div>
            <div className="">Find our resellers</div>
            <div className="">Blog</div>
            <div className="">Press</div>
            <div className="iconsContainer">
              <FaInstagram />
              <BsFacebook />
              <FaTwitter />
            </div>
          </div>
        </div>
        <div className="inputCont">
          <Input></Input>
        </div>
      </div>
    </>
  );
}
