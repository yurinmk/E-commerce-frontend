import "./MainProduct.css";
import React, { useEffect } from "react";

import ContainerGeral from "./ContainerGeral";
import DetailsProduct from "./DetailsProduct";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import { findProduct } from "../../../store/Products/actions";

function MainProduct() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.item);

  useEffect(() => {
    dispatch(findProduct(id));
  }, []);

  return (
    <>
      <div className="container-details">
        <ContainerGeral product={product} />
        <DetailsProduct product={product} />
      </div>
    </>
  );
}

export default MainProduct;
