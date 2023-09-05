import { useContext } from "react";
import { ProviderContext } from "../../provider/Provider";
import { BiSolidCartAdd } from "react-icons/bi";
/* eslint-disable react/prop-types */
const Card = ({ product }) => {
  const { name, price, ratings, img } = product || {};
  const { handleAddToCart } = useContext(ProviderContext);
  return (
    <div>
      <div className="p-5 shadow rounded-lg hover:shadow-lg duration-100 group bg-blue-100/10 hover:bg-blue-100/20">
        <div className="overflow-hidden rounded-t-lg">
          <img
            src={img}
            alt={name + "image"}
            className="group-hover:scale-110 duration-300"
          />
        </div>
        <div className="mt-4 text-sm text-center">
          <h6 className="text-lg font-semibold text-blue-950">{name}</h6>
          <p>
            Price:
            <span className="mx-1 text-base font-semibold text-blue-950">
              {price}
            </span>
            tk
          </p>
          <p>{ratings} </p>
          <button
            onClick={() => handleAddToCart(product)}
            className="bg-blue-500 hover:bg-blue-700 duration-300 text-white px-2 py-1 rounded mt-3"
          >
            <div className="flex items-center gap-2">
              <span>Add to Cart</span>
              <BiSolidCartAdd size={18}></BiSolidCartAdd>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
