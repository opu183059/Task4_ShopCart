import { useContext } from "react";
import { ProviderContext } from "../../provider/Provider";

const CartPage = () => {
  const { cart } = useContext(ProviderContext);
  let totalPrice = 0;
  let quantity = 0;
  for (const product of cart) {
    totalPrice = totalPrice + product.price * product.quantity;
    quantity = quantity + product.quantity;
  }

  console.log(totalPrice);
  return (
    <div className="min-h-screen">
      <h1>Cart page</h1>
    </div>
  );
};

export default CartPage;
