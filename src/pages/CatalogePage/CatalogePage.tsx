import "./CatalogePage.css";
import FeaturedItems from "../../components/FeaturedItems/FeaturedItems";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../../slice/cardsSlice";

export default function CatalogePage() {
  // const [imageUrl, setImageUrl] = useState('');
  //здесь устанавливается состояние loading, которое указывает на то, загружаются ли данные на странице
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch<any>();

  //данные из общего массива
  //хук для загрузки данных из хранилища Redux с помощью действия fetchData при первом рендере компонента
  useEffect(() => {
    dispatch(fetchData())
      .then(() => setLoading(false))
      .catch(() => setLoading(false));
  }, [dispatch]);
  //хук, который позволяет компоненту получать данные из хранилища Redux
  const data = useSelector((state: any) => state.counter.data);

  if (loading) {
    return <div>Loading...</div>;
  }

  //эта функция усекает текст до указанного количества слов
  //и добавляет многоточие в конце, если текст был усечен (обрезать title)
  const truncateText = (text: string, wordsCount: number) => {
    const words = text.split(" ");
    if (words.length > wordsCount) {
      return words.slice(0, wordsCount).join(" ") + "...";
    }
    return text;
  };

  return (
    <>
      <div className="featContainer">
        <div className="featinfo">Cataloge</div>
        <div className="featCards">
          {data.slice(2, 3).map((item: any) => (
            <div key={item.id}>
              <FeaturedItems
                cardContainer="cardContainer"
                featCostContainer="featCostContainer"
                styleFeat="featText"
                slyleFeatImage="imgloomA"
                styleFeatTwo="featCost"
                price={item.price}
                image={item.image}
                title={item.title}
                id={item.id}
              ></FeaturedItems>
            </div>
          ))}

          {data.slice(3, 4).map((item: any) => (
            <div key={item.id}>
              <FeaturedItems
                cardContainer="cardContainer"
                featCostContainer="featCostContainer"
                styleFeat="featText"
                slyleFeatImage="imgloomB"
                styleFeatTwo="featCost"
                image={item.image}
                price={item.price}
                title={item.title}
                id={item.id}
              ></FeaturedItems>
            </div>
          ))}

          {data.slice(6, 7).map((item: any) => (
            <div key={item.id}>
              <FeaturedItems
                cardContainer="cardContainer"
                featCostContainer="featCostContainer"
                styleFeat="featText"
                slyleFeatImage="imgloomC"
                styleFeatTwo="featCost"
                image={item.image}
                price={item.price}
                title={truncateText(item.title, 3)}
                id={item.id}
              ></FeaturedItems>
            </div>
          ))}

          {data.slice(15, 16).map((item: any) => (
            <div key={item.id}>
              <FeaturedItems
                cardContainer="cardContainer"
                featCostContainer="featCostContainer"
                styleFeat="featText"
                slyleFeatImage="imgloomB"
                styleFeatTwo="featCost"
                image={item.image}
                price={item.price}
                title={truncateText(item.title, 3)}
                id={item.id}
              ></FeaturedItems>
            </div>
          ))}
        </div>

        <div className="featCards">
          {data.slice(11, 12).map((item: any) => (
            <div key={item.id}>
              <FeaturedItems
                cardContainer="cardContainer"
                featCostContainer="featCostContainer"
                styleFeat="featText"
                slyleFeatImage="imgloomA"
                styleFeatTwo="featCost"
                price={item.price}
                image={item.image}
                title={truncateText(item.title, 3)}
                id={item.id}
              ></FeaturedItems>
            </div>
          ))}

          {data.slice(7, 8).map((item: any) => (
            <div key={item.id}>
              <FeaturedItems
                cardContainer="cardContainer"
                featCostContainer="featCostContainer"
                styleFeat="featText"
                slyleFeatImage="imgloomB"
                styleFeatTwo="featCost"
                price={item.price}
                image={item.image}
                title={truncateText(item.title, 3)}
                id={item.id}
              ></FeaturedItems>
            </div>
          ))}

          {data.slice(8, 9).map((item: any) => (
            <div key={item.id}>
              <FeaturedItems
                cardContainer="cardContainer"
                featCostContainer="featCostContainer"
                styleFeat="featText"
                slyleFeatImage="imgloomC"
                styleFeatTwo="featCost"
                price={item.price}
                image={item.image}
                title={truncateText(item.title, 3)}
                id={item.id}
              ></FeaturedItems>
            </div>
          ))}

          {data.slice(10, 11).map((item: any) => (
            <div key={item.id}>
              <FeaturedItems
                cardContainer="cardContainer"
                featCostContainer="featCostContainer"
                styleFeat="featText"
                slyleFeatImage="imgloomC"
                styleFeatTwo="featCost"
                price={item.price}
                image={item.image}
                title={truncateText(item.title, 3)}
                id={item.id}
              ></FeaturedItems>
            </div>
          ))}
        </div>

        <div className="featCards">
          {data.slice(1, 2).map((item: any) => (
            <div key={item.id}>
              <FeaturedItems
                cardContainer="cardContainer"
                featCostContainer="featCostContainer"
                styleFeat="featText"
                slyleFeatImage="imgloomA"
                styleFeatTwo="featCost"
                price={item.price}
                image={item.image}
                title={truncateText(item.title, 3)}
                id={item.id}
              ></FeaturedItems>
            </div>
          ))}

          {data.slice(5, 6).map((item: any) => (
            <div key={item.id}>
              <FeaturedItems
                cardContainer="cardContainer"
                featCostContainer="featCostContainer"
                styleFeat="featText"
                slyleFeatImage="imgloomB"
                styleFeatTwo="featCost"
                price={item.price}
                image={item.image}
                title={truncateText(item.title, 3)}
                id={item.id}
              ></FeaturedItems>
            </div>
          ))}

          {data.slice(13, 14).map((item: any) => (
            <div key={item.id}>
              <FeaturedItems
                cardContainer="cardContainer"
                featCostContainer="featCostContainer"
                styleFeat="featText"
                slyleFeatImage="imgloomC"
                styleFeatTwo="featCost"
                price={item.price}
                image={item.image}
                title={truncateText(item.title, 3)}
                id={item.id}
              ></FeaturedItems>
            </div>
          ))}

          {data.slice(12, 13).map((item: any) => (
            <div key={item.id}>
              <FeaturedItems
                cardContainer="cardContainer"
                featCostContainer="featCostContainer"
                styleFeat="featText"
                slyleFeatImage="imgloomC"
                styleFeatTwo="featCost"
                price={item.price}
                image={item.image}
                title={truncateText(item.title, 3)}
                id={item.id}
              ></FeaturedItems>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
