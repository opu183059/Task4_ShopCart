import { FaShopify } from "react-icons/fa";
import { BsArrowDown } from "react-icons/bs";
const Banner = () => {
  return (
    <div className="bg-[url('https://i.ibb.co/9wzjqyP/barrett-ward-1q-Qx3-LHa-YGg-unsplash.jpg')] bg-auto md:bg-cover">
      <div className="md:h-screen h-96 flex max-w-6xl mx-auto items-center px-5 md:px-0">
        <div>
          <div className="flex gap-2 text-3xl md:text-6xl font-semibold items-center">
            <FaShopify className="text-5xl md:text-7xl text-amber-700"></FaShopify>
            <h1>Shopping Cart</h1>
          </div>
          <p className="md:w-1/2 mt-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum quis
            illum, cupiditate aspernatur qui amet numquam. Non numquam
            dignissimos cum?
          </p>
          <div className="mt-7 flex gap-2">
            <a href="#products" className="hover:text-amber-700 font-semibold">
              Scroll Down for shopping
            </a>
            <span className="animate-bounce mt-2">
              <BsArrowDown size={25}></BsArrowDown>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
