/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { getShoppingCart } from "../../utilities/getShoppingCart";
import { addToDb } from "../../utilities/addToDb";
import { removeFromDb } from "../../utilities/removeFromDb";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

export const ProviderContext = createContext(null);
const Provider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    const storedCart = getShoppingCart();
    const savedCart = [];
    for (const id in storedCart) {
      const addedProduct = products.find((product) => product.id === id);
      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
      }
    }
    setCart(savedCart);
  }, [products]);

  const handleAddToCart = (product) => {
    let newCart = [];
    const exists = cart.find((productData) => productData.id === product.id);
    if (!exists) {
      product.quantity = 1;
      newCart = [...cart, product];
    } else {
      exists.quantity = exists.quantity + 1;
      const remaining = cart.filter(
        (productData) => productData.id !== product.id
      );
      newCart = [...remaining, exists];
    }
    setCart(newCart);
    addToDb(product.id);
    toast.success(`${product.name} added to cart`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const handleRemoveFromCart = (id) => {
    const remaining = cart.filter((product) => product.id !== id);
    setCart(remaining);
    removeFromDb(id);
    toast.error("item removed", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const handleClearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
    toast.error("Cart Cleared", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };
  const handlePlaceOrder = () => {
    setCart([]);
    localStorage.removeItem("cart");
    toast.success("Ordered Placed Successfully", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const value = {
    products,
    cart,
    handleAddToCart,
    handleRemoveFromCart,
    handleClearCart,
    handlePlaceOrder,
  };
  return (
    <ProviderContext.Provider value={value}>
      {children}
    </ProviderContext.Provider>
  );
};

export default Provider;
