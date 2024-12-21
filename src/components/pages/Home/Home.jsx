import React from "react";
import Sidebar from "../../Sidebar/Sidebar";
import Card from "../../Card/Card.jsx";
import { useOutletContext } from "react-router-dom";

const Home = () => {

  const {products} = useOutletContext();
  console.log(products);
  
  return (
    <>
        <section className="content">
          <div className="container content__container">
            <div className="content__group">
              <div className="content__main">
                <h2 className="content__main-title">Рекомендации для вас</h2>
                <div className="content__main-list">
                  {
                    products.map(card => (
                     <Card 
                     key={card.id}                     
                     id={card.id}                     
                     title={card.title}
                     price={card.price}
                     img={card.img}
                     address={card.address}
                     date={card.date}
                     />
                    ))
                  }                  
                </div>
              </div>             

              <Sidebar/>
            </div>
          </div>
        </section>
      
    </>
  );
};

export default Home;
