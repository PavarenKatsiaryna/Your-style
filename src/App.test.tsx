import { render, screen } from "@testing-library/react";
import App from "./App";

//тест проверяет, что компонент App рендерит ссылку с текстом "learn react"
test("renders learn react link", () => {
  // выполняется рендеринг компонента App (компонент App будет отображен в виртуальном DOM)
  render(<App />);
  //с помощью функции screen.getByText(/learn react/i), мы ищем элемент на странице,
  // который содержит текст "learn react" (регистр не учитывается)
  const linkElement = screen.getByText(/learn react/i);
  //с помощью ожидания expect(linkElement).toBeInTheDocument(), мы проверяем,
  //что найденный элемент ,ссылка с текстом "learn react", действительно отображается на странице
  expect(linkElement).toBeInTheDocument();
});
//если ссылка не найдена или не отображается на странице, тест завершится неудачей
