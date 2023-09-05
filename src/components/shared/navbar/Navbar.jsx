import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { RxCross1 } from "react-icons/rx";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { ProviderContext } from "../../provider/Provider";
import { FaShopify } from "react-icons/fa";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const { cart } = useContext(ProviderContext);
  const menu = [
    { name: "Home", link: "/" },
    { name: "About us", link: "/about" },
    { name: "Products", link: "/product" },
  ];

  return (
    <div className="bg-slate-50 fixed w-full z-50 shadow-md">
      <div className="navbar max-w-6xl py-3 mx-auto flex justify-between items-center px-2 md:px-0">
        <Link to={"/"} className="logo flex gap-2 items-center">
          <FaShopify size={30} className="text-amber-700"></FaShopify>
        </Link>
        <div className="menu hidden md:block">
          <ul className="flex gap-4">
            {menu.map((item) => (
              <li key={item.name}>
                <a
                  href={item.link}
                  className="uppercase hover:text-amber-600 font-semibold duration-150"
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
              <span className="text-xs bg-red-500 text-white rounded-full w-5 h-5 flex justify-center items-center absolute -top-2 left-6">
                {cart.length}
              </span>
            )}
          </Link>
          <Link
            to={"/login"}
            className="hidden md:block px-3 py-1 bg-amber-600 text-white rounded-md uppercase text-sm"
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
              <RxCross1 size={25} className="text-amber-800"></RxCross1>
            ) : (
              <HiOutlineMenuAlt3
                size={25}
                className="text-amber-800"
              ></HiOutlineMenuAlt3>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu  */}
      <div
        className={`mobileMenu absolute overflow-hidden w-full ${
          toggle ? `h-screen` : `h-0`
        } bg-white duration-700 flex justify-center items-center text-center z-50`}
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
              onClick={() => {
                setToggle(!toggle);
              }}
              className="px-3 py-1 bg-amber-600 text-sm text-white rounded-md uppercase"
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
