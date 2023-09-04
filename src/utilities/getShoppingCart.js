const getShoppingCart = () => {
  let shoppingCart = {};
  const storedCart = localStorage.getItem("cart");
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  }
  return shoppingCart;
};

export { getShoppingCart };
