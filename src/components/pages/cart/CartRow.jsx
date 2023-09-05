/* eslint-disable react/prop-types */
import { useContext } from "react";
import { ProviderContext } from "../../provider/Provider";
import { AiOutlineDelete } from "react-icons/ai";

const CartRow = ({ product }) => {
  const { id, name, price, img, quantity } = product || {};
  const { handleRemoveFromCart } = useContext(ProviderContext);

  return (
    <tr className="bg-amber-50/50 border">
      <td className="ps-5">
        <img src={img} alt="" className="w-14 rounded-md" />
      </td>
      <td className="flex flex-col py-3 ps-5">
        <p>{name}</p>
        <p>
          Price:
          <span className="text-amber-800 font-semibold mx-1">{price}</span>tk
        </p>
        <p className="mt-2">Quantity: {quantity}</p>
      </td>

      <td className="py-3 ps-5">{quantity * price} tk</td>
      <td className="pe-5 text-right">
        <button
          onClick={() => handleRemoveFromCart(id)}
          className="bg-red-500 text-white rounded-full p-1"
        >
          <AiOutlineDelete size={20}></AiOutlineDelete>
        </button>
      </td>
    </tr>
  );
};

export default CartRow;
