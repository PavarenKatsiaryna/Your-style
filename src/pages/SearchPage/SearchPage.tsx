import "./SearchPage.css";
import { RxCross2 } from "react-icons/rx";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { SlMagnifier } from "react-icons/sl";
import { Link } from "react-router-dom";
import { ISearch } from "../../types/interface";

export default function SearchPage({ isSearchOpen, closeSearch }: ISearch) {
  //используется хук для получения данных из хранилища Redux (state.counter.data),
  //который содержит массив объектов с данными
  const data = useSelector((state: any) => state.counter.data);
  //хук  для управления searchTerm строки для поискового запроса
  const [searchTerm, setSearchTerm] = useState("");
  //хук состояния для управления earchResults массивом объектов с id и title результатов поиска
  const [searchResults, setSearchResults] = useState<
    { id: number; title: string }[]
  >([]);
  //ф-я присваивает значение введенного текста в поле поиска переменной searchTerm
  const handleChange = (e: any) => {
    setSearchTerm(e.target.value);
  };
  //хук используется для выполнения фильтрации данных из хранилища по значению searchTerm
  //и установки результата в searchResults ,и  вызывается при изменении зависимостей
  //data (данные из хранилища) и searchTerm (значение поискового запроса)
  useEffect(() => {
    if (data && data.length > 0) {
      const results = data.filter((item: any) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(results);
    }
  }, [data, searchTerm]);

  return (
    <>
      {isSearchOpen && (
        <div className="searchContainer">
          <RxCross2
            onClick={closeSearch}
            style={{ cursor: "pointer" }}
            className="crossIcon"
          />
          <input
            className="searchInput"
            type="text"
            value={searchTerm}
            onChange={handleChange}
            placeholder="Enter product name"
          ></input>
          <SlMagnifier className="iconSearch" />

          {searchTerm.length > 0 && (
            <div className="searchResults">
              {searchResults.map((item: any) => (
                <Link key={item.id} to={`${item.id}`} className="titleSearch">
                  {item.title}
                </Link>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
}
