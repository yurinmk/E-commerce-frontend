import "./ProductsMain.css";
import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ToastAnimated, { showToast } from "../../alerts/toast";

import { listProducts, addShoppingCar } from "../../../store/Products/actions";

import Carrinho from "../../../assets/carrinho2.png";
import Datails from "../../../assets/menu.png";

function ProductsMain() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { reference } = useParams();
  const products = useSelector((state) => state.product.items);
  const car_items = useSelector((state) => state.product.car_items);

  const [title, setTitle] = useState("");

  useEffect(() => {
    dispatch(listProducts(reference));

    if (reference === "vasoseestruturas") {
      setTitle(
        `${
          reference.substr(0, 5)[0].toUpperCase() + reference.substr(1, 4)
        } ${reference.substr(5, 1)} ${
          reference.substr(6)[0].toUpperCase() + reference.substr(7)
        }`
      );
    } else {
      setTitle(`${reference[0].toUpperCase()}${reference.substr(1)}`);
    }
  }, [reference]);

  function handleDatailsProduct(id) {
    history.push(`/product/${id}/${reference}`);
  }

  function handleAddShoppingCar(product) {
    let quantity = 1;

    dispatch(addShoppingCar(product, quantity));
    showToast({ type: "success", message: "Produto adicionado ao carrino" });
  }

  function productList() {
    return products.map((product) => {
      let existShoppingCar = false;
      car_items.map((item) => {
        if (item.id === product.id) {
          existShoppingCar = true;
        }
      });
      return (
        <div key={product.id} className="card-product">
          <div className="head">
            <p>{product.name}</p>
          </div>
          <div className="image">
            <div className="flower">
              <img
                src={`${process.env.REACT_APP_URL}${product.img_url2}`}
                alt={product.name}
              />
            </div>
            {reference === "sementes" && (
              <div className="seed">
                <img
                  src={`${process.env.REACT_APP_URL}${product.img_url1}`}
                  alt={product.name}
                />
              </div>
            )}
          </div>
          <div className="footer">
            <div className="price">
              <p>R$: {product.price}</p>
            </div>
            <div className="btns">
              {!existShoppingCar && (
                <div
                  className="btn-shopping-car"
                  onClick={() => {
                    handleAddShoppingCar(product);
                  }}
                >
                  <img src={Carrinho} alt="Carrinho" />
                </div>
              )}

              <div
                className="btn-shopping-car"
                onClick={() => {
                  handleDatailsProduct(product.id);
                }}
              >
                <img src={Datails} alt="Detalhes" />
              </div>
            </div>
          </div>
        </div>
      );
    });
  }

  return (
    <div className="container-products">
      <div className="title">
        <h1>{title}</h1>
      </div>

      <section className="card-limit-area">{productList()}</section>
      <ToastAnimated />
    </div>
  );
}

export default ProductsMain;
