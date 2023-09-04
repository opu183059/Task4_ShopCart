import { getShoppingCart } from "./getShoppingCart";

const addToDb = (id) => {
  let shoppingCart = getShoppingCart();
  const quantity = shoppingCart[id];
  if (!quantity) {
    shoppingCart[id] = 1;
  } else {
    const newQuantity = quantity + 1;
    shoppingCart[id] = newQuantity;
  }
  localStorage.setItem("cart", JSON.stringify(shoppingCart));
};

export { addToDb };
