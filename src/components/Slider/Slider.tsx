import React, { useState } from "react";
import FeaturedItemsPage from "../../pages/FeaturedItemsPage/FeaturedItemsPage";
import "./Slider.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import FeaturedItemsTwoPage from "../../pages/FeaturedItemsTwoPage/FeaturedItemsTwoPage";

const Slider = () => {
  //слайдер с двумя страницами для прокрутки вперед и назад
  const pages = [<FeaturedItemsPage />, <FeaturedItemsTwoPage />];
  //внутри компонента используются хуки useState для хранения текущего индекса страницы (currentPageIndex)
  // и функции setCurrentPageIndex для изменения этого индекса.
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  //функция nextSlide переходит к следующему слайду путем увеличения индекса
  //на 1 и возвращении к началу, если был достигнут конец списка страниц
  const nextSlide = () => {
    const newIndex = (currentPageIndex + 1) % pages.length;
    setCurrentPageIndex(newIndex);
  };
  //функция prevSlide переходит к предыдущему слайду путем уменьшения индекса
  //на 1 и возврата к концу списка, если был достигнут начала
  const prevSlide = () => {
    const newIndex = (currentPageIndex - 1 + pages.length) % pages.length;
    setCurrentPageIndex(newIndex);
  };

  return (
    <div className="slider">
      <div className="featiconscont">
        <IoIosArrowBack onClick={prevSlide}></IoIosArrowBack>{" "}
        <IoIosArrowForward onClick={nextSlide}></IoIosArrowForward>
      </div>
      {pages[currentPageIndex]}
    </div>
  );
};

export default Slider;
