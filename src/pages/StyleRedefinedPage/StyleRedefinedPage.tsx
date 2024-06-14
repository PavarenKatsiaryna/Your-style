import "./StyleRedefinedPage.css";
import backWhite from "../../assets/white.jpg";
import { useState, useEffect } from "react";

export default function StyleRedefinedPage() {
  // хук для хранения URL изображения в состоянии imageUrl
  const [imageUrl, setImageUrl] = useState("");
  //хук для отправки асинхронного запроса на сервер (fetch) для получения изображения
  //с фиксированными размерами, после получения ответа, изображение преобразуется в объект
  // URL и сохраняется в состоянии imageUrl
  useEffect(() => {
    async function fetchImage() {
      try {
        let response = await fetch("https://loremflickr.com/320/240/car");
        let blob = await response.blob();
        let url = URL.createObjectURL(blob);
        setImageUrl(url);
      } catch (error) {
        console.error("Failed to fetch image:", error); //ошибка,если запрос на сервер не прошел
      }
    }

    fetchImage();
  }, []);

  return (
    <>
      <div className="redefinedContainer">
        <img src={backWhite} alt="bg" className="backWhite" />
        <div className="containerRedef">
          {imageUrl && (
            <img src={imageUrl} alt="Animal" className="redefinedimg" />
          )}
          <div className="containerRedefText">
            <div className="textredefOne"> Style Redefined,</div>
            <div className="textredefTwo"> City Unleashed</div>
          </div>
          <div className="containerRedefBottom">
            {imageUrl && (
              <img
                src={imageUrl}
                alt="Animal"
                className="redefinedImgBottomOne"
              />
            )}
            {imageUrl && (
              <img
                src={imageUrl}
                alt="Animal"
                className="redefinedImgBottomTwo"
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
