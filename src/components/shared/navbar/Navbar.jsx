import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { RxCross1 } from "react-icons/rx";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { ProviderContext } from "../../provider/Provider";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const { cart } = useContext(ProviderContext);
  const menu = [
    { name: "Home", link: "/" },
    { name: "About us", link: "/about" },
  ];

  return (
    <div className="bg-blue-100">
      <div className="navbar max-w-6xl py-3 mx-auto flex justify-between items-center px-2 md:px-0 relative">
        <Link to={"/"} className="logo flex items-center">
          <h1 className="font-kaushan text-[25px]">Shops CART</h1>
        </Link>
        <div className="menu hidden md:block">
          <ul className="flex gap-4">
            {menu.map((item) => (
              <li key={item.name}>
                <a
                  href={item.link}
                  className="uppercase font hover:text-blue-600 font-semibold  duration-150"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="right flex items-center gap-6 cursor-pointer">
          <Link to={"/cart"} className="relative">
            <AiOutlineShoppingCart size={25}></AiOutlineShoppingCart>
            {cart.length > 0 && (
              <span className="text-xs bg-red-400 rounded-full w-5 h-5 flex justify-center items-center absolute -top-2 left-6">
                {cart.length}
              </span>
            )}
          </Link>
          <Link
            to={"/login"}
            className="hidden md:block px-3 py-1 bg-blue-500 text-white rounded-md uppercase"
          >
            Login
          </Link>

          <button
            className="md:hidden"
            onClick={() => {
              setToggle(!toggle);
            }}
          >
            {toggle ? (
              <RxCross1 size={25} className="text-blue-800"></RxCross1>
            ) : (
              <HiOutlineMenuAlt3
                size={25}
                className="text-blue-800"
              ></HiOutlineMenuAlt3>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu  */}
      <div
        className={`mobileMenu absolute h-full overflow-hidden ${
          toggle ? `w-full` : `w-0`
        } bg-white duration-1000 flex justify-center items-center text-center z-50`}
      >
        <ul className="text-xl">
          {menu.map((item) => (
            <li key={item.name} className="mb-8">
              <a
                href={item.link}
                className="uppercase"
                onClick={() => {
                  setToggle(!toggle);
                }}
              >
                {item.name}
              </a>
            </li>
          ))}
          <li>
            <Link
              to={"/login"}
              className="px-3 py-1 bg-blue-500 text-white rounded-md uppercase"
            >
              Login
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
