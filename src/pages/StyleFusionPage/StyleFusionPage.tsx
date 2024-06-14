import "./StyleFusionPage.css";
import { useState, useEffect } from "react";

export default function StyleFusionPage() {
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
      <div className="fusionContainer">
        <div className="fusionMiniContainer">
          <div className="textFusion">Style fusion: </div>
          {imageUrl && (
            <img src={imageUrl} alt="Animal" className="fusionImage" />
          )}
          <div className="textFusion">where trends converge </div>
        </div>
      </div>
    </>
  );
}
