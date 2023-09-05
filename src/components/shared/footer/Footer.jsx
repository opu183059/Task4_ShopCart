import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
const Footer = () => {
  return (
    <div className="bg-slate-50">
      <div className="px-5 md:px-0 flex gap-2 flex-col md:flex-row justify-between items-center max-w-6xl mx-auto py-6">
        <p>© 2023 Shopping Cart®. All rights reserved.</p>
        <div>
          <p>Follow us on:</p>
          <div className="flex justify-between cursor-pointer">
            <AiFillLinkedin size={24}></AiFillLinkedin>
            <AiFillFacebook size={24}></AiFillFacebook>
            <AiFillInstagram size={24}></AiFillInstagram>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
