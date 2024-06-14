import "../FeaturedItemsPage/FeaturedItemsPage.css";
import FeaturedItems from "../../components/FeaturedItems/FeaturedItems";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../../slice/cardsSlice";

export default function FeaturedItemsTwoPage() {
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch<any>();

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
      </div>
    </>
  );
}
