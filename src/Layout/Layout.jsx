import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Search from "../components/Search/Search";
import { cardsArray } from "../constants";

const Layout = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(cardsArray);
  }, []);

  const handleSearchArray = (value) => {
    setProducts(
      cardsArray.filter((item) => {
        return (
          item.title.toLowerCase().includes(value.toLowerCase()) ||
          item.price.toLowerCase().includes(value.toLowerCase())
        );
      })
    );
  };

  const handleResetArray = () => {
    setProducts(cardsArray); // Сбрасываем фильтр и показываем все товары
  };

  return (
    <>
      <Header handleResetArray={handleResetArray}/>
      <main>
        <Search handleSearchArray={handleSearchArray} />
        <Outlet context={{ products: products }} />
      </main>
    </>
  );
};

export default Layout;
