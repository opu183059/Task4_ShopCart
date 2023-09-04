import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
const Footer = () => {
  return (
    <div className="bg-blue-100">
      <div className="flex justify-between items-center max-w-6xl mx-auto py-10">
        <p>all rights reserved</p>
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
