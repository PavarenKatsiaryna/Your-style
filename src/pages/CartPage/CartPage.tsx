import Button from "../../components/Button/Button";
import "./CartPage.css";
import { RxCross2 } from "react-icons/rx";
import { LuSmile } from "react-icons/lu";
import { TbMoodSad } from "react-icons/tb";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ReactNode } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import {
  clearCartAction,
  clearAllCartAction,
} from "../../slice/oneProductSlice";

export default function CartPage({ isBasketOpen, closeBasket }: any) {
  //использует хук useSelector из библиотеки Redux для получения данных из глобального состояния
  const cartItems = useSelector((state: any) => state.onePost.cartItems);
  //получает функцию dispatch из хука useDispatch, которая используется для отправки действий Redux
  const dispatch = useDispatch();
  //объявляет состояние компонента с помощью хука useState
  const [arrayText, setArrayText] = useState<ReactNode>(null);
  //функция для обрезки текста до определенного количества слов
  const truncateText = (text: string, wordsCount: number) => {
    const words = text.split(" ");
    if (words.length > wordsCount) {
      return words.slice(0, wordsCount).join(" ") + "...";
    }
    return text;
  };
  //функция для удаления элемента из корзины
  const handleDeleteItem = (id: number) => {
    dispatch(clearCartAction({ id }));
  };
  //функция для очистки всей корзины
  const handleEmptyCart = (userId: any) => {
    dispatch(clearAllCartAction(userId));
  };
  //хук useEffect отвечает за обновление содержимого корзины на основе элементов
  //в массиве cartItems и обработку взаимодействий, таких как удаление товаров из корзины
  useEffect(() => {
    setArrayText(
      //если в массиве cartItems есть элементы, будет отображен контейнер
      // корзины с товарами в корзине, каждый товар в корзине будет отображать
      // изображение продукта, название, цену и кнопку удаления для удаления товара из корзины
      cartItems.length > 0 ? (
        <div className="cartContainer">
          <div className="textCart">Cart</div>
          <RxCross2
            onClick={closeBasket} //закрыть контейнер корзины при нажатии на Х
            style={{ cursor: "pointer" }}
            className="crossIcon"
          />
          <LuSmile className="iconSmileS" />
          {cartItems.map((oneprod: any) => (
            <div key={oneprod.id} className="cartItem">
              <div className="containerForItems">
                <img src={oneprod.image} className="cartImage" />
                <div className="cartTitle">
                  {truncateText(oneprod.title, 3)}
                </div>
                <div className="cartPrice">{oneprod.price}$</div>
                <RiDeleteBin6Line
                  className="deleteIcon"
                  onClick={() => handleDeleteItem(oneprod.id)} //функция вызывается при нажатии пользователем на иконку удаления, чтобы удалить определенный товар из корзины
                />
              </div>
            </div>
          ))}
          {/*удаление всех товаров из корзины*/}
          <button className="emptyButton" onClick={handleEmptyCart}>
            Empty the cart
          </button>
        </div>
      ) : (
        <>
          {/*компонент, который отображает контейнер корзины с текстом "Ваша корзина сейчас пуста" 
        вместе с иконкой грустного лица. Если корзина не пуста, он будет отображать товары в корзине.
         Компонент также имеет кнопку для перехода на страницу каталога*/}
          <div className="cartContainer">
            <RxCross2
              onClick={closeBasket}
              style={{ cursor: "pointer" }}
              className="crossIcon"
            />
            <div className="textCart">Cart</div>
            <div className="titleCart">
              Your cart is empty right now <TbMoodSad className="iconSmile" />{" "}
            </div>
            <Link className="signLink" to="/cataloge">
              <Button
                buttonStyle="buttonLogIn"
                isDisabled={false}
                text="go to the catalog"
              />
            </Link>
          </div>
        </>
      )
    );
  }, [cartItems]);

  return <>{isBasketOpen && <div>{arrayText}</div>}</>;
}
