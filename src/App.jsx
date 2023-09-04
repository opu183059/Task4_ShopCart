import { Outlet } from "react-router-dom";
import Navbar from "./components/shared/navbar/Navbar";
import Footer from "./components/shared/footer/Footer";

// import { FaBeer } from 'react-icons/fa';
function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className="max-w-6xl mx-auto">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
