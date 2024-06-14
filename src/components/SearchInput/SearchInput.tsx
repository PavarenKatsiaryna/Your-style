import "./SearchInput.css";
import { SlMagnifier } from "react-icons/sl";

export default function SearchInput() {
  return (
    <>
      <form method="get" action="">
        <input
          id="textbox"
          name="getName"
          className="searchInput"
          placeholder="Enter product name"
          type="text"
        ></input>
        <button id="get" type="submit">
          Отправить
        </button>
        <SlMagnifier className="iconSearch" />
      </form>
    </>
  );
}
