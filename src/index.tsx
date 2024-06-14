import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import store from "../src/store/store";
import { Provider } from "react-redux";

//код использует библиотеку React для создания корневого элемента приложения и его рендеринга
// мы используем метод createRoot из ReactDOM, чтобы создать корневой элемент с указанным DOM-элементом с id "root".
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
//метод render корневого элемента для рендеринга приложения
// внутри root.render() мы оборачиваем наше приложение в компонент Provider из библиотеки Redux,
// чтобы предоставить доступ к состоянию хранилища store
root.render(
  <Provider store={store}>
    {/*компонент React.StrictMode обертывает приложение и помогает выявлять  проблемы в коде*/}
    <React.StrictMode>
      {/* компонент App представляет собой корневой компонент приложения, 
      который будет отрисовываться в указанном элементе*/}
      <App />
    </React.StrictMode>
  </Provider>
);
