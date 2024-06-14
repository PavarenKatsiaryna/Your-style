import "./Button.css";
import { IButton } from "../../types/interface";

export default function Button({ text, isDisabled, buttonStyle }: IButton) {
  return (
    <>
      <button disabled={isDisabled} className={buttonStyle}>
        {text}
      </button>
    </>
  );
}
