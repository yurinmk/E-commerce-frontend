import "./ProductsList.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ToastAnimated, { showToast } from "../../alerts/toast";
import {
  addQuantity,
  removeShoppingCar,
} from "../../../store/Products/actions";

import most from "../../../assets/mais.png";
import anyless from "../../../assets/menos.png";

function ProductsList() {
  const dispatch = useDispatch();
  const car_items = useSelector((state) => state.product.car_items);

  function modifyQuantity(id, type, quantity) {
    switch (type) {
      case "increment":
        dispatch(addQuantity(id, quantity + 1));
        break;

      case "decrement":
        if (quantity === 1) {
          dispatch(addQuantity(id, 1));
        } else {
          dispatch(addQuantity(id, quantity - 1));
        }
        break;
    }
  }

  function sendCarItems() {
    return car_items.map((product) => {
      let newPrice = 0;
      let newRealPrice = 0;

      if (product.quantity > 1) {
        if (product.discount) {
          newPrice =
            product.price * product.quantity -
            product.price * product.quantity * product.discount;
          newRealPrice = product.price * product.quantity;
        } else {
          newPrice = product.price * product.quantity;
        }
      } else {
        if (product.discount) {
          newPrice = product.price - product.price * product.discount;
          newRealPrice = product.price;
        } else {
          newPrice = product.price;
        }
      }
      return (
        <div className="container-prod" key={product.id}>
          <div className="area1">
            <div className="product">
              <img
                src={`${process.env.REACT_APP_URL}${product.img_url1}`}
                alt=""
              />
            </div>
            <div className="descrition">
              <h1>{product.name}</h1>
              <h3>Descrição do produto...</h3>
              <button
                onClick={() => {
                  dispatch(removeShoppingCar(product.id));
                  showToast({
                    type: "default",
                    message: "Item removido do carrinho",
                  });
                }}
              >
                Excluir
              </button>
            </div>
          </div>

          <div className="area2">
            <div className="quantity">
              <label>Quantidade</label>
              <input
                type="number"
                placeholder="1"
                value={product.quantity}
                disabled
              />
              <div className="quantity-bnt">
                <img
                  src={anyless}
                  alt="Menos"
                  onClick={() => {
                    modifyQuantity(product.id, "decrement", product.quantity);
                  }}
                />
                <img
                  src={most}
                  alt="Mais"
                  onClick={() => {
                    modifyQuantity(product.id, "increment", product.quantity);
                  }}
                />
              </div>
            </div>

            <div className="prices">
              <div className="discount-original">
                {product.discount && (
                  <>
                    <p>-{product.discount * 100}%</p>
                    <div className="price-cut">
                      <div className="cut1"></div>
                      <div className="cut2"></div>
                      <div className="price">
                        <p>R$: {newRealPrice.toFixed(2)}</p>
                      </div>
                    </div>
                  </>
                )}
              </div>
              <div className="new-price">
                <h2>R$: {newPrice.toFixed(2)}</h2>
              </div>
            </div>
          </div>
        </div>
      );
    });
  }
  return (
    <div className="products-list">
      {sendCarItems()}
      <ToastAnimated />
    </div>
  );
}

export default ProductsList;
