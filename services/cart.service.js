import axios from "axios";
const API_URL = "process.env.REACT_PUBLIC_BACKEND/cart/create-cart";

const createCart = (userId, status, total, products) => {
  return axios.post(API_URL, {
    userId,
    status,
    total,
    products,
  });
};

const CartService = {
  createCart,
};

export default CartService;
