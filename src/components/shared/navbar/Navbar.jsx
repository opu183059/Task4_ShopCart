import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const menu = [
    { name: "home", link: "/" },
    { name: "cart", link: "/cart" },
  ];

  return (
    <div>
      <div className="navbar max-w-6xl border-b-[2px] py-3 mx-auto flex justify-between items-center px-2 md:px-0 relative">
        <div className="logo flex items-center">
          <h1 className="font-kaushan text-[25px]">Shops CART</h1>
        </div>
        <div className="menu hidden md:block">
          <ul className="flex gap-4">
            {menu.map((item) => (
              <li key={item.name}>
                <a
                  href={item.link}
                  className="uppercase font-poppins hover:text-pink-600 font-semibold  duration-150"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="right flex gap-3 cursor-pointer">
          <Link to={"/"} className="px-3 py-1 bg-red-300 rounded-md uppercase">
            Login
          </Link>
          <button
            className="md:hidden"
            onClick={() => {
              setToggle(!toggle);
            }}
          >
            {toggle ? (
              <RxCross1 size={20}></RxCross1>
            ) : (
              <HiOutlineMenuAlt3 size={20}></HiOutlineMenuAlt3>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu  */}
      <div
        className={`mobileMenu absolute w-full overflow-hidden h-full ${
          toggle ? `w-full` : `w-0`
        } bg-white duration-1000 flex justify-center items-center text-center z-50`}
      >
        <ul className=" text-xl">
          {menu.map((item) => (
            <li key={item.name} className="mb-8">
              <a
                href={item.link}
                className="uppercase font-poppins"
                onClick={() => {
                  setToggle(!toggle);
                }}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
