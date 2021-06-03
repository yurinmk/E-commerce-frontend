import "./ContainerGeral.css";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { findProduct, listProducts } from "../../../store/Products/actions";

import next from "../../../assets/next.png";
import back from "../../../assets/back.png";

function ContainerGeral() {
  const { id, reference } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const product = useSelector((state) => state.product.item);
  const products = useSelector((state) => state.product.items);

  const APP_URL = process.env.REACT_APP_URL;
  const [count, setCount] = useState(1);
  const [productBigIMG, setProductBigIMG] = useState("");
  const [productSmallIMG1, setProductSmallIMG1] = useState("");
  const [productSmallIMG2, setProductSmallIMG2] = useState("");
  const [productSmallIMG3, setProductSmallIMG3] = useState("");

  useEffect(() => {
    dispatch(findProduct(id));
  }, []);

  useEffect(() => {
    dispatch(listProducts(reference));

    setProductBigIMG(`${APP_URL}${product.img_url1}`);
    setProductSmallIMG1(`${APP_URL}${product.img_url1}`);
    setProductSmallIMG2(`${APP_URL}${product.img_url2}`);
    setProductSmallIMG3(`${APP_URL}${product.img_url3}`);
  }, [product]);

  useEffect(() => {
    switch (count) {
      case 1:
        if (!productSmallIMG1.includes("null")) {
          setProductBigIMG(`${APP_URL}${product.img_url1}`);
        }
        break;
      case 2:
        if (!productSmallIMG2.includes("null")) {
          setProductBigIMG(`${APP_URL}${product.img_url2}`);
        }
        break;
      case 3:
        if (!productSmallIMG3.includes("null")) {
          setProductBigIMG(`${APP_URL}${product.img_url3}`);
        }
        break;
    }
  }, [count]);

  function handleDatailsProduct(id) {
    history.push(`/product/${id}/${reference}`);
    window.location.reload();
  }

  function passImages(action) {
    const existIMG1 = product.img_url1 ? 1 : 0;
    const existIMG2 = product.img_url2 ? 1 : 0;
    const existIMG3 = product.img_url3 ? 1 : 0;
    const sum = existIMG1 + existIMG2 + existIMG3;
    console.log(sum);
    switch (action) {
      case "next":
        if (count === sum) {
          setCount(sum);
        } else {
          setCount(count + 1);
        }
        break;
      case "back":
        if (count === 1) {
          setCount(1);
        } else {
          setCount(count - 1);
        }
        break;
    }
  }

  function randomProducts() {
    let newProducts = [];

    for (var i = 0; i < 4; i++) {
      let randomPosition = Math.floor(
        Math.random() * (products.length - 0) + 0
      );
      newProducts.push(products[randomPosition]);
    }

    return newProducts.map((prod) => {
      if (prod) {
        return (
          <>
            <div
              className="card"
              key={prod.id}
              onClick={() => handleDatailsProduct(prod.id)}
            >
              <div className="image">
                <div className="flower">
                  <img src={`${APP_URL}${prod.img_url2}`} alt={prod.name} />
                </div>
                {reference === "sementes" && (
                  <div className="seed">
                    <img src={`${APP_URL}${prod.img_url1}`} alt={prod.name} />
                  </div>
                )}
              </div>
            </div>
          </>
        );
      }
    });
  }

  return (
    <div className="container-geral">
      <div className="details-imgs">
        <div className="small-img">
          {!productSmallIMG1.includes("null") && (
            <div
              className="details-small-img"
              onClick={() => {
                setProductBigIMG(`${APP_URL}${product.img_url1}`);
                setCount(1);
              }}
            >
              <img src={productSmallIMG1} alt="" />
            </div>
          )}
          {!productSmallIMG2.includes("null") && (
            <div
              className="details-small-img"
              onClick={() => {
                setProductBigIMG(`${APP_URL}${product.img_url2}`);
                setCount(2);
              }}
            >
              <img src={productSmallIMG2} alt="" />
            </div>
          )}

          {!productSmallIMG3.includes("null") && (
            <div
              className="details-small-img"
              onClick={() => {
                setProductBigIMG(`${APP_URL}${product.img_url3}`);
                setCount(3);
              }}
            >
              <img src={productSmallIMG3} alt="" />
            </div>
          )}
        </div>

        <div className="details-big-img">
          <div className="big-img">
            <img src={productBigIMG} alt="" />
          </div>
          <div className="btns">
            <div className="back" onClick={() => passImages("back")}>
              <img src={back} alt="Voltar" />
            </div>
            <div className="next" onClick={() => passImages("next")}>
              <img src={next} alt="Passar" />
            </div>
          </div>
        </div>
      </div>

      <div className="container-cards">{randomProducts()}</div>
    </div>
  );
}

export default ContainerGeral;
