import api from "../../utils/api";

export const listProducts = (reference) => (dispatch, getState) => {
  api
    .get(`/listProducts/${reference}`)
    .then((success) => {
      dispatch({
        type: "LIST_PRODUCTS",
        payload: success.data.success,
      });
    })
    .catch((error) => {
      dispatch({
        type: "LIST_PRODUCTS_ERROR",
        payload: {
          items: [],
          message: error.response.data.error,
          statusCode: error.response.status,
        },
      });
    });
};

export const findProduct = (id) => (dispatch, getState) => {
  api
    .post(`/findProduct/${id}`)
    .then((success) => {
      dispatch({
        type: "FIND_PRODUCT",
        payload: success.data.success,
      });
    })
    .catch((error) => {
      dispatch({
        type: "ERROR",
        payload: {
          message: error.response.data.error,
          statusCode: error.response.status,
        },
      });
    });
};

export const addShoppingCar = (product, quantity) => (dispatch, gatState) => {
  product.quantity = quantity;
  let item = [product];

  dispatch({
    type: "ADD_SHIPPING_CAR",
    payload: item,
  });
};

export const removeShoppingCar = (id) => (dispatch, gatState) => {
  dispatch({
    type: "REMOVE_SHIPPING_CAR",
    payload: id,
  });
};

export const addQuantity = (id_product, quantity) => (dispatch, gatState) => {
  dispatch({
    type: "ADD_QUANTITY",
    payload: { id_product, quantity },
  });
};

export const openModal = () => (dispatch, gatState) => {
  dispatch({
    type: "OPEN_MODAL",
  });
};
