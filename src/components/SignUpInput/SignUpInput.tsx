import { useState } from "react";
import "../../components/SignUpInput/SignUpInput.css";
import { IInput } from "../../types/interface";

export default function Inputs({
  typeInput,
  isDisabled,
  type,
  legend,
  id,
  placeholder,
  inputValue,
  setInputValue,
}: IInput) {
  //функция inputTextChange,которая принимает событие и устанавливает ошибку в
  //зависимости от длины введенного текста (если длина больше 20 символов)
  function inputTextChange(event: any): void {
    setError(event.target.value.length > 20);
    setErrorText(event.target.value.length > 20);
  }
  const [error, setError] = useState(false);
  const [errorText, setErrorText] = useState(false);

  return (
    <div className={`mainBlock`}>
      <form>
        <fieldset className="fieldset">
          <legend className={`legend`}>{legend}</legend>
          <input
            disabled={isDisabled}
            id={id}
            type={type}
            className={typeInput}
            value={inputValue}
            onChange={setInputValue}
            placeholder={placeholder}
            style={{ border: error ? "2px solid #FD3419" : typeInput }}
          ></input>
        </fieldset>
        <div
          className="errorText"
          style={{ display: errorText ? "flex" : typeInput }}
        >
          Error
        </div>
      </form>
    </div>
  );
}
