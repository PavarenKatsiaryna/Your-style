import "./Input.css";

export default function Input() {
  return (
    <>
      <div className="inputContainer">
        <div className="containerMini">
          <div className="inputText">Subscribe to our newsletters</div>
          <div className="inputName">Email:</div>
          <input
            type="email"
            className="realInput"
            placeholder="Type your email here.."
          ></input>
          <button type="submit" className="inputButton">
            Subscribe
          </button>
        </div>
      </div>
    </>
  );
}
