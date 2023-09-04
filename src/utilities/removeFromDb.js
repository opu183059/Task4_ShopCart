import { getShoppingCart } from "./getShoppingCart";

const removeFromDb = (id) => {
  const shoppingCart = getShoppingCart();
  if (id in shoppingCart) {
    delete shoppingCart[id];
    localStorage.setItem("cart", JSON.stringify(shoppingCart));
  }
};

export { removeFromDb };
