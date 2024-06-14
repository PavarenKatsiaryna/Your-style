import "./FeaturedItems.css";
import { IFeaturedItems } from "../../types/interface";
import { Link } from "react-router-dom";

//ф-я возвращает JSX-разметку для отображения карточки "Featured Items".
//используются значения переданных свойств для вывода изображения, заголовка, цены и стилей элементов.
//она содержит ссылку, которая перенаправляется на страницу с определенным id товара.
export default function FeaturedItems({
  image,
  id,
  title,
  styleFeat,
  price,
  slyleFeatImage,
  styleFeatTwo,
  cardContainer,
  featCostContainer,
}: IFeaturedItems) {
  return (
    <>
      <div key={id}>
        <Link to={`/${id}`} className="linkStyle">
          <div className={cardContainer}>
            <div key={id}>
              <img src={image} className={slyleFeatImage} />
            </div>
            <div className={featCostContainer}>
              <div className={styleFeat}>{title}</div>
              <div className={styleFeatTwo}>{price}$</div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
