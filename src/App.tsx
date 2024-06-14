import "./App.css";
import Header from "./components/Header/Header";
import LendingPage from "./pages/LendingPage/LendingPage";
import OneProductPage from "./pages/OneProductPage/OneProductPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SingUpPage from "./pages/SignUpPage/SignUpPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import LogInPage from "./pages/LogInPage/LogInPage";
import CatalogePage from "./pages/CatalogePage/CatalogePage";
function App() {
  return (
    <>
      {/*компонент BrowserRouter из библиотеки react-router-dom предоставляет навигацию в приложении, 
    позволяя переключаться между разными страницами без перезагрузки всей страницы.*/}
      <BrowserRouter>
        <Header></Header> {/*отображение шапки приложения*/}
        <Routes>
          {" "}
          {/*используется для определения маршрутов в приложении*/}
          {/*каждый из Route компонентов определяет конкретный путь в URL и соответствующий ему компонент,
         который должен отображаться при этом пути*/}
          {/*путь,который отображается на главной странице*/}
          <Route path="/" element={<LendingPage />}></Route>{" "}
          {/*путь, который отображается на странице с информацией об одном продукте, ":id" представляет переменную,
           которая может быть частью URL и передаваться в компонент для отображения конкретного продукта*/}
          <Route path="/:id" element={<OneProductPage />}></Route>
          {/*путь,который отображается на странице регистрации пользователя*/}
          <Route path="/signUp" element={<SingUpPage />}></Route>
          {/*путь,который отображается на странице входа пользователя в систему*/}
          <Route path="/logIn" element={<LogInPage />}></Route>
          {/*путь,который отображается на странице с сообщением об ошибке*/}
          <Route path="/errorpage" element={<ErrorPage />}></Route>
          {/*путь,который отображается на странице с каталогом продуктов*/}
          <Route path="/cataloge" element={<CatalogePage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
