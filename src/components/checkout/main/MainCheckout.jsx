import "./MainCheckout.css";
import React, { useEffect, useState } from "react";

import Steps from "./Steps";
import Address from "./Address";
import ProductsList from "./ProductsList";
import { useSelector } from "react-redux";

function MainCheckout() {
  const car_items = useSelector((state) => state.product.car_items);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantityItems, setTotalQuantityItems] = useState(0);

  useEffect(() => {
    let sum = 0;
    let items = 0;
    car_items.map((item) => {
      if (item.discount) {
        sum +=
          item.price * item.quantity -
          item.price * item.quantity * item.discount;
      } else {
        sum += item.price * item.quantity;
      }
      items += item.quantity;
    });
    setTotalPrice(sum);
    setTotalQuantityItems(items);
  }, [car_items]);

  return (
    <>
      <div className="container-geral">
        <Steps />

        <Address />

        <div className="division"></div>

        <div className="container-productsList">
          <ProductsList />
        </div>

        <div className="division"></div>

        <div className="total-purchase">
          <div className="delivery-price">
            <p>Frete:</p>
            <p>6,00</p>
          </div>
          <div className="quantity-items">
            <p>Quantidade total de itens:</p>
            <p>{totalQuantityItems}</p>
          </div>
          <div className="total-price">
            <p>Total com frete:</p>
            <p>R$: {(totalPrice + 6).toFixed(2)}</p>
          </div>
        </div>

        <div className="division"></div>

        <div className="btn-next">
          <button>Próximo passo</button>
        </div>
      </div>
    </>
  );
}

export default MainCheckout;
