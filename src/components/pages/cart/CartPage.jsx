import { useContext, useEffect } from "react";
import { ProviderContext } from "../../provider/Provider";
import CartRow from "./CartRow";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { cart, handleClearCart, handlePlaceOrder } =
    useContext(ProviderContext);
  let productPrice = 0;
  let quantity = 0;
  let deliveryCost = 0;
  let totalPrice = 0;
  for (const product of cart) {
    productPrice = productPrice + product.price * product.quantity;
    quantity = quantity + product.quantity;
  }
  deliveryCost = quantity * 50;
  totalPrice = productPrice + deliveryCost;

  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="min-h-screen px-2 md:px-0 py-16 max-w-6xl mx-auto">
      <div>
        {cart.length > 0 ? (
          <>
            <div className="flex justify-between items-end mt-10 mb-5">
              <div>
                <table className="w-40">
                  <tr>
                    <td>Product Price:</td>
                    <td className="text-right">{productPrice}tk</td>
                  </tr>
                  <tr className="border-b-[1px] border-black">
                    <td>Delivery Cost:</td>
                    <td className="text-right">{deliveryCost}tk</td>
                  </tr>
                  <tr>
                    <td>Total Amount:</td>
                    <td className="text-right">{totalPrice}tk</td>
                  </tr>
                </table>
              </div>
              <div className="flex flex-col gap-2">
                <button
                  onClick={handleClearCart}
                  className="px-2 py-1 bg-red-600 text-sm text-white rounded-md"
                >
                  Clear Cart
                </button>
                <button
                  onClick={handlePlaceOrder}
                  className="px-2 py-1 bg-amber-600 text-sm text-white rounded-md"
                >
                  Place Order
                </button>
              </div>
            </div>
            <table className="min-w-full text-left text-sm">
              <tr className="bg-amber-100/40  border-[1px] border-black">
                <th className="p-5">Image</th>
                <th className="p-5">Details</th>
                <th className="p-5">Total</th>
                <th className="p-5 text-right">Delete</th>
              </tr>
              {cart.map((product) => (
                <CartRow key={product.id} product={product}></CartRow>
              ))}
            </table>
          </>
        ) : (
          <div className="h-[500px] text-xl flex items-center justify-center">
            <h1 className="font-semibold mt-5 px-5 text-center">
              There is no products in the cart, please go to
              <Link
                to={"/"}
                className="text-amber-900 hover:text-blue-600 mx-1 underline"
              >
                Home page
              </Link>
              add some products
            </h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
