import "./OneProductPage.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import back from "../../assets/bg1.jpg";
import { addToCart, fetchOneProduct } from "../../slice/oneProductSlice";
import { useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { decrement, increment } from "../../slice/countSlice";

export default function OneProductPage() {
  //данные одной карточки
  const { id } = useParams();
  // использование хука для доступа к возможности отправки действий в хранилище
  const dispatch = useDispatch<any>();
  // использование хука для отправки запроса на получение информации об одном товаре при монтировании компонента
  useEffect(() => {
    if (typeof id === "string") {
      dispatch(fetchOneProduct(id));
    }
  }, []);
  //использование хука для получение информации о товаре и количестве товара из состояния Redux
  const oneprod = useSelector((state: any) => state.onePost.oneProduct);
  const countValue = useSelector((state: any) => state.count.value);
  //использование состояний "isCounterButtonVisible" и "count" для отслеживания видимости кнопки
  // увеличения количества товара
  const [isCounterButtonVisible, setIsCounterButtonVisible] = useState(false);
  const [count, setCount] = useState(0);
  //обработка нажатия на кнопку добавления товара в корзину, отправка действия добавления
  //товара в корзину в хранилище Redux и увеличение счетчика товара.
  useEffect(() => {
    if (count > 0) {
      setIsCounterButtonVisible(true);
    } else {
      setIsCounterButtonVisible(false);
    }
  }, [count]);

  const handleAddToCart = () => {
    dispatch(addToCart(oneprod));
    setCount(count + 1);
  };

  //когда вызывается функция handleColorChange, выбранный цвет устанавливается в значение color,
  // а когда вызывается функция handleSizeChange, выбранный размер устанавливается в значение size
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const handleColorChange = (color: any) => {
    setSelectedColor(color);
  };
  const handleSizeChange = (size: any) => {
    setSelectedSize(size);
  };

  return (
    <>
      <div className="mainContainer">
        <img src={back} alt="bg1" className="backOne" />

        <div className="relativeContainer">
          <Link className="linkStyle" to="/cataloge">
            <div className="backText">
              <FaArrowLeft className="backIcon" />
              BACK
            </div>
          </Link>
          <div key={oneprod.id}>
            <img src={oneprod.image} className="imageOneProduct" />
          </div>

          <div className="oneProductSettings">
            <div key={oneprod.id}>
              <div className="oneProductTitle">{oneprod.title}</div>
              <div className="oneProductCount">{oneprod.price}$</div>

              <div className="oneProductColor">
                <div className="textColor">Color: {selectedColor} </div>
                <div className="buttonsColor">
                  <button
                    onClick={() => handleColorChange("Brown")}
                    className="buttonsColorBrown"
                  ></button>
                  <button
                    onClick={() => handleColorChange("Black")}
                    className="buttonsColorBlack"
                  ></button>
                  <button
                    onClick={() => handleColorChange("White")}
                    className="buttonsColorWhite"
                  ></button>
                </div>
              </div>
              <div className="oneProductSize">
                <button
                  onClick={() => handleSizeChange("XS")}
                  className="buttonsSize"
                >
                  XS
                </button>
                <button
                  onClick={() => handleSizeChange("S")}
                  className="buttonsSize"
                >
                  S
                </button>
                <button
                  onClick={() => handleSizeChange("M")}
                  className="buttonsSize"
                >
                  M
                </button>
                <button
                  onClick={() => handleSizeChange("L")}
                  className="buttonsSize"
                >
                  L
                </button>
                <button
                  onClick={() => handleSizeChange("XL")}
                  className="buttonsSize"
                >
                  XL
                </button>
                {/* <h3>Выбранный размер: {selectedSize}</h3> */}
              </div>

              <div>
                {isCounterButtonVisible ? (
                  <div className="counterButton">
                    <button
                      className="more"
                      onClick={() => dispatch(decrement())}
                    >
                      -
                    </button>
                    <div className="countValueStyle">{countValue}</div>
                    <button
                      className="more"
                      onClick={() => dispatch(increment())}
                    >
                      +
                    </button>
                  </div>
                ) : (
                  <button className="addToCart" onClick={handleAddToCart}>
                    Add to Cart
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
