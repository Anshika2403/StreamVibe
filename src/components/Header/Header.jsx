import React from "react";
import Navbar from "./Navbar";
import Logo from "../Logo";
import { Link, useNavigate } from "react-router-dom";
import { Container } from "../index";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../store/authThunks";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  
  const status = useSelector((state) => state.auth.status);

  const handleLogout = async () => {
    try {
      await dispatch(logoutUser()).unwrap();
    
      navigate("/login", { replace: true }); // Using replace: true prevents going back to protected routes
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
      <div className="z-20 flex justify-around w-full mx-auto my-8">
        <Logo />
        <Navbar />
        <div className="z-20 hidden md:grid md:grid-cols-3 w-24 h-6 relative top-4 right-12 cursor-pointer">
          <img src="assets/Search.png" className="mr-2"></img>
          <img src="assets/Bell.png" className="mr-2"></img>
          {status ? (
          <img
            src="https://img.icons8.com/?size=100&id=Wgd88M98QIxt&format=png&color=ffffff"
            alt="Logout"
            className="peer z-10 w-6"
            onClick={handleLogout}
          />
        ) : (
          <Link to="/signup">
            <img
              src="assets/icons8-enter-24.png"
              alt="Login"
              className="peer z-10"
            />
          </Link>
        )}
        </div>
      </div>

  );
}

export default Header;
