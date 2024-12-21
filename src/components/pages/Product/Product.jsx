import React from "react";

import Sidebar from "../../Sidebar/Sidebar";
import { useParams, useOutletContext } from "react-router-dom";


const Product = () => {
  const {id} = useParams();
  const {products} = useOutletContext();
  const findProduct = products.find(prod => prod.id === +id)
  return (
    <>      
      
      <section className="content">
        <div className="container content__container">

          {findProduct ? 
          <div className="content__group">
          <div className="content__product">
            <div className="content__product-left">
              <h2 className="content__product-title">{+id + 1}. {findProduct.title} </h2>
              <img
                className="content__product-image"
                src="/assets/images/product.jpeg"
                alt="product-image"
              />
              <p className="content__product-text">
                {findProduct.description} <br />
                Торг возможен. <br />
                За период эксплуатации не выявлено ни одной проблемы. <br />
                Из минусов — нужно прокачать задний тормоз. <br />
                Установлен отсекатель сзади. <br />
                Покрышки CST внедорожные. <br />
                Все на подшипниках, болты протянуты. <br />
                Пробег 881км , это немного для такого зверя.
              </p>
            </div>
            <div className="content__product-right">
              <h2 className="content__product-price">{findProduct.price}</h2>
              <button className="btn btn-primary btn-large">
                Показать телефон
              </button>
            </div>
          </div>
          <Sidebar />
        </div> :
          <h2>product not found</h2>
          }
          
        </div>
      </section>
    </>
  );
};

export default Product;
