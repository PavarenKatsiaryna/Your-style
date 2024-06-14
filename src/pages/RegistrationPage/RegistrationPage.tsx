import Button from "../../components/Button/Button";
import "./RegistrationPage.css";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

export default function RegistrationPage({ isMenuOpen, closeMenu }: any) {
  return (
    <>
      {isMenuOpen && (
        <div className="regContainer">
          <RxCross2
            onClick={closeMenu}
            style={{ cursor: "pointer" }}
            className="crossIcon"
          />
          <div className="textLogIn">Log In</div>
          <Link to={`/logIn`} className="linkStyle">
            {" "}
            <Button
              buttonStyle="buttonLogIn"
              isDisabled={false}
              text="Log In"
            />
          </Link>
          <Link to={`/signUp`} className="linkStyle">
            {" "}
            <Button
              buttonStyle="buttonSignUp"
              isDisabled={false}
              text="Sign Up"
            />
          </Link>
        </div>
      )}
    </>
  );
}
