import { useState } from "react";
import { HEADER_LOGO } from "../Utility/utils";
import { Link } from "react-router";
import { useContext } from "react";
import UserContext from "../Utility/UserContext";

const Header = () => {
  const [loginStatus, setLoginStatus] = useState("Login");
  function changeLogin() {
    setLoginStatus((prevStatus) =>
      prevStatus === "Login" ? "Logout" : "Login"
    );
  }
  // Using useContext to access UserContext

  let userDetails = useContext(UserContext);

  return (
    <div
      id="header-container"
      className="flex items-center justify-between px-6 py-4 bg-white shadow-md sticky top-0 z-50"
    >
      {/* Logo */}
      <div id="logo-container">
        <img className="w-32 object-contain" src={HEADER_LOGO} alt="App Logo" />
      </div>

      {/* Navigation */}
      <nav
        id="nav-items"
        className="flex items-center space-x-6 text-gray-700 font-medium"
      >
        <ul className="flex items-center space-x-5 text-sm">
          <li>
            <Link
              to="/"
              className="hover:text-orange-500 transition-colors duration-200"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-orange-500 transition-colors duration-200"
            >
              About Us
            </Link>
          </li>
          <li className="hover:text-orange-500 cursor-pointer transition-colors">
            Contact Us
          </li>
          <Link to="/cart">
            <li className="hover:text-orange-500 cursor-pointer transition-colors">
              🛒 Cart
            </li>
          </Link>

          {/* Login/Logout Button */}
          {loginStatus === "Login" ? (
            <button
              onClick={changeLogin}
              className="ml-2 px-4 py-1.5 rounded-full bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold transition-shadow shadow-sm hover:shadow-md"
            >
              {userDetails.username}
            </button>
          ) : (
            <button
              onClick={changeLogin}
              className="ml-2 px-4 py-1.5 rounded-full bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold transition-shadow shadow-sm hover:shadow-md"
            >
              Login
            </button>
          )}
        </ul>
        {/* <UserContext.Consumer>{(data)=>{return <p>{data.url}</p>}}</UserContext.Consumer> */}
      </nav>
    </div>
  );
};

export default Header;
