/* eslint-disable react/prop-types */
import { useContext } from "react";
import { ProviderContext } from "../../provider/Provider";
import { AiOutlineDelete } from "react-icons/ai";

const CartRow = ({ product }) => {
  const { id, name, price, img, quantity } = product || {};
  const { handleRemoveFromCart } = useContext(ProviderContext);

  return (
    <tr className="bg-blue-50/50 border-b-[1px]">
      <td className="ps-5">
        <img src={img} alt="" className="w-12 rounded-md" />
      </td>
      <td className="flex flex-col gap-2 py-3 ps-5">
        <p> {name}</p>
        <p>Price: ${price}</p>
      </td>
      <td className="py-3 ps-5">{quantity}</td>
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
