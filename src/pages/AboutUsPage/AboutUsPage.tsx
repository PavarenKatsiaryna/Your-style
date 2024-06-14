import "./AboutUsPage.css";
import backWhite from "../../assets/bokeh.jpg";
import { useState, useEffect } from "react";
import AboutUs from "../../components/AboutUs/AboutUs";

export default function AboutUsPage() {
  const [imageUrl, setImageUrl] = useState("");
  // хук выполняет асинхронный запрос к API LoremFlickr для получения изображения автомобиля
  // размером 320x240, полученное изображение сохраняется в переменной url,
  // которая затем присваивается состоянию imageUrl с помощью функции setImageUrl.
  useEffect(() => {
    async function fetchImage() {
      try {
        let response = await fetch("https://loremflickr.com/320/240/car");
        let blob = await response.blob();
        let url = URL.createObjectURL(blob);
        setImageUrl(url);
      } catch (error) {
        console.error("Failed to fetch image:", error); //ошибка
      }
    }

    fetchImage();
  }, []);

  return (
    <>
      <div className="usContainer">
        <img src={backWhite} alt="bg" className="backBokeh" />
        {/*когда условие верно (т.е. imageUrl существует), компонент возвращает изображение с классом "usImageOne", "usImageTwo" или "usImageThree". */}
        <div className="contForcomp">
          {imageUrl && (
            <img src={imageUrl} alt="Animal" className="usImageOne" />
          )}
          <AboutUs></AboutUs>
          {imageUrl && (
            <img src={imageUrl} alt="Animal" className="usImageTwo" />
          )}
          {imageUrl && (
            <img src={imageUrl} alt="Animal" className="usImageThree" />
          )}
        </div>
      </div>
    </>
  );
}
