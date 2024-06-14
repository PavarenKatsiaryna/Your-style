import "./GetTheLook.css";
import { IFeaturedItems } from "../../types/interface";
import { useState, useEffect } from "react";

export default function GetTheLook({
  title,
  styleFeat,
  styleFeatTwo,
  price,
  featCostContainer,
}: IFeaturedItems) {
  const [imageUrl, setImageUrl] = useState("");
  //переданный в useEffect  колбэк-функции будет вызвана при монтировании компонента (первый раз после рендеринга)
  //из-за пустого массива зависимостей вторым аргументом.
  useEffect(() => {
    async function fetchImage() {
      try {
        let response = await fetch("https://loremflickr.com/320/240/car");
        let blob = await response.blob();
        let url = URL.createObjectURL(blob);
        setImageUrl(url);
      } catch (error) {
        console.error("Failed to fetch image:", error);
        //Если запрос не удалось выполнить, выводится сообщение об ошибке в консоль
      }
    }
    //Внутри колбэк-функции определена асинхронная функция fetchImage(),
    // которая выполняет запрос к API для получения изображения
    fetchImage();
  }, []);

  return (
    <>
      <div className="containerCardLook">
        {imageUrl && <img src={imageUrl} alt="Animal" className="imageLook" />}
        <div className={featCostContainer}>
          <div className={styleFeat}>{title}</div>
          <div className={styleFeatTwo}>{price}</div>
        </div>
      </div>
    </>
  );
}
