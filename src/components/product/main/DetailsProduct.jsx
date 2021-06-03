import "./DetailsProduct.css";
import React, { useEffect, useState } from "react";
import InputMask from "react-input-mask";
import cep from "cep-promise";
import { Link, useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import ToastAnimated, { showToast } from "../../alerts/toast";

import {
  findProduct,
  addQuantity,
  addShoppingCar,
} from "../../../store/Products/actions";

import stock from "../../../assets/emEstoque.png";
import most from "../../../assets/mais.png";
import anyless from "../../../assets/menos.png";
import search from "../../../assets/search.png";
import delivery from "../../../assets/frete.png";
import cart from "../../../assets/carrinho2.png";

function DetailsProduct() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const product = useSelector((state) => state.product.item);
  const car_items = useSelector((state) => state.product.car_items);

  const [zipCode, setZipCode] = useState("");
  const [price, setPrice] = useState(0);
  const [realPrice, setRealPrice] = useState(0);
  const [address, setAddress] = useState({});
  const [count, setCount] = useState(1);

  useEffect(() => {
    dispatch(findProduct(id));
  }, []);

  useEffect(() => {
    if (zipCode === "") {
      setAddress({});
    }
  }, [zipCode]);

  useEffect(() => {
    calculateDiscount();
  }, [count]);

  useEffect(() => {
    setRealPrice(product.price);
    if (product.discount) {
      const discountPrice = product.price - product.price * product.discount;
      setPrice(discountPrice);
    } else {
      setPrice(product.price);
    }
  }, [product]);

  function searchZipCode() {
    cep(zipCode).then((success) => {
      const { street, city, state } = success;
      setAddress({ street, city, state });
    });
  }

  function anylessMost(type) {
    switch (type) {
      case "most":
        setCount(count + 1);

        break;
      case "anyless":
        if (count === 1) {
          setCount(1);
        } else {
          setCount(count - 1);
        }
        break;
    }
  }

  function calculateDiscount() {
    const newPrice = product.price * count;
    const newDiscountPrice = newPrice - newPrice * product.discount;
    if (product.discount) {
      setPrice(newDiscountPrice);
      setRealPrice(newPrice);
    } else {
      setPrice(newPrice);
    }
  }

  function handleBuy() {
    let existShoppingCar = false;
    car_items.map((item) => {
      if (item.id === product.id) {
        existShoppingCar = true;
        dispatch(addQuantity(product.id, item.quantity + count));
        history.push("/checkout");
      }
    });
    if (!existShoppingCar) {
      dispatch(addShoppingCar(product, count));
      history.push("/checkout");
    }
  }

  function handleAddShoppingCar() {
    let existShoppingCar = false;
    car_items.map((item) => {
      if (item.id === product.id) {
        existShoppingCar = true;
        dispatch(addQuantity(product.id, item.quantity + count));
        showToast({
          type: "default",
          message: "Item foi somado aos items do carrinho!",
        });
      }
    });
    if (!existShoppingCar) {
      dispatch(addShoppingCar(product, count));
      showToast({
        type: "success",
        message: "Item foi adicionado ao carrinho!",
      });
    }
  }

  return (
    <div className="details-product">
      <div className="header">
        <div className="stars"></div>
        <div className="product-name">
          <h2>{product.name}</h2>
        </div>
        <div className="stock">
          <img src={stock} alt="Em estoque" />
          <p>Em estoque</p>
        </div>
      </div>

      <div className="division"></div>

      <div className="main-price">
        <div className="discount-price">
          <h1>R$: {price}</h1>
        </div>
        {product.discount && (
          <div className="price-cut">
            <div className="cut1"></div>
            <div className="cut2"></div>
            <div className="price">
              <h3>R$: {realPrice}</h3>
            </div>
          </div>
        )}
      </div>

      <div className="division"></div>

      <div className="main-datails">
        <div className="quantity">
          <div className="input">
            <label>Quantidade</label>
            <input
              type="number"
              placeholder="1"
              value={count}
              onChange={(value) => setCount(value.target.value)}
            />
          </div>
          <div className="quntity-btns">
            <img
              src={anyless}
              alt="Menos"
              onClick={() => anylessMost("anyless")}
            />
            <img src={most} alt="Mais" onClick={() => anylessMost("most")} />
          </div>
        </div>

        <div className="area-geral">
          <div className="area-zip-code">
            <div className="zip-code">
              <label>Calcule o frete:</label>

              <InputMask
                mask="99999-999"
                placeholder="CEP"
                value={zipCode}
                onChange={(text) => setZipCode(text.target.value)}
              />
              <img src={search} alt="" onClick={() => searchZipCode()} />
            </div>
            <div className="img-delivery">
              <img src={delivery} alt="Frete" />
            </div>
            <div className="delivery-price">
              <h2>R$: 6,00</h2>
            </div>
          </div>

          {address.hasOwnProperty("street") && zipCode !== "" && (
            <div className="address">
              <p>
                Endereço: {`${address.street} ${address.city} ${address.state}`}
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="btns">
        <div className="buy" onClick={() => handleBuy()}>
          <h1>Comprar</h1>
        </div>

        <div className="cart" onClick={() => handleAddShoppingCar()}>
          <img src={cart} alt="" />
        </div>
      </div>
      <ToastAnimated />
    </div>
  );
}

export default DetailsProduct;
