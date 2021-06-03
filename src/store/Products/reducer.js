const INITIAL_STATE = {
  items: [],
  item: {},
  car_items: [],
  message: "",
  statusCode: 0,
  openModal: false,
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case "LIST_PRODUCTS":
      return {
        ...state,
        items: action.payload,
      };

    case "LIST_PRODUCTS_ERROR":
      return {
        ...state,
        items: action.payload.items,
        message: action.payload.message,
        statusCode: action.payload.statusCode,
      };

    case "FIND_PRODUCT":
      return {
        ...state,
        item: action.payload,
      };

    case "ADD_SHIPPING_CAR":
      let new_car_items = [...state.car_items];
      action.payload.map((product) => {
        new_car_items.push(product);
      });
      return {
        ...state,
        car_items: new_car_items,
      };

    case "REMOVE_SHIPPING_CAR":
      let newItems = [...state.car_items];
      newItems.map((item, index) => {
        if (item.id === action.payload) {
          newItems.splice(index, 1);
        }
      });
      return {
        ...state,
        car_items: newItems,
      };

    case "ADD_QUANTITY":
      let new_items = [...state.car_items];
      new_items.map((item) => {
        if (item.id === action.payload.id_product) {
          item.quantity = action.payload.quantity;
        }
      });
      return {
        ...state,
        car_items: new_items,
      };
    case "OPEN_MODAL":
      return {
        ...state,
        openModal: !state.openModal,
      };

    case "ERROR":
      return {
        ...state,
        message: action.payload.message,
        statusCode: action.payload.statusCode,
      };

    default:
      return state;
  }
}
