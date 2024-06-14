import "./FeaturedItemsPage.css";
import FeaturedItems from "../../components/FeaturedItems/FeaturedItems";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../../slice/cardsSlice";

export default function FeaturedItemsPage() {
  // const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch<any>();

  //данные из общего массива
  useEffect(() => {
    dispatch(fetchData())
      .then(() => setLoading(false))
      .catch(() => setLoading(false));
  }, [dispatch]);

  const data = useSelector((state: any) => state.counter.data);

  if (loading) {
    return <div>Loading...</div>;
  }

  //обрезать title
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
        <div className="featinfo">Featured items</div>
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
      </div>
    </>
  );
}
