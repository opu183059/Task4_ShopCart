import { useContext } from "react";
import { ProviderContext } from "../../provider/Provider";
import CartRow from "./CartRow";

const CartPage = () => {
  const { cart, handleClearCart } = useContext(ProviderContext);
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
      <button onClick={handleClearCart}>Clear Cart</button>

      <div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <tr className="bg-blue-100 border-b-[1px] border-black">
              <th className="p-5">Image</th>
              <th className="p-5">Details</th>
              <th className="p-5">Quantity</th>
              <th className="p-5 text-right">Delete</th>
            </tr>
            {cart.map((product) => (
              <CartRow key={product.id} product={product}></CartRow>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
