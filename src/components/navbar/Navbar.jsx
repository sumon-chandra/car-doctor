import { FaShoppingCart, FaSearch } from "react-icons/fa";

import logo from "../../assets/logo.png";
import NavItem from "./NavItem";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context-provider/AuthProvider";

const Navbar = () => {
  const navigate = useNavigate();
  const { users, logout } = useContext(AuthContext);
  const handleLogout = () => {
    logout().then(() => {});
    navigate("/login");
  };
  return (
    <div className="navbar fixed lg:px-36 px-4 py-3 z-10 bg-gradient-to-b from-black">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavItem value="About" to="/about" />
            </li>
            <li>
              <NavItem value="Services" to="/services" />
            </li>
            <li>
              <NavItem value="Contact" to="/contact" />
            </li>
          </ul>
        </div>
        <Link to="/" className="text-xl flex items-center">
          <img src={logo} alt="logo" className="w-14" />
          <span className="text-xl font-bold text-white">Car doctor</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-8">
          <li>
            <NavItem value="About" to="/about" />
          </li>
          <li>
            <NavItem value="Services" to="/services" />
          </li>
          {users && (
            <li>
              <NavItem value="My Bookings" to="/bookings" />
            </li>
          )}
          <li>
            <NavItem value="Contact" to="/contact" />
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="indicator text-2xl flex gap-4 mr-4 text-white">
          <FaShoppingCart className="cursor-pointer" />
          {/* <span className="badge badge-sm indicator-item">8</span> */}
          <FaSearch className="cursor-pointer" />
          {users && <p className="text-sm">{users.email}</p>}
        </div>

        {users ? (
          <button
            onClick={handleLogout}
            className="btn text-lg text-main border-main bg-transparent normal-case font-semibold shadow-md hover:bg-white hover:border-main"
          >
            Logout
          </button>
        ) : (
          <Link
            to="/login"
            className="btn text-lg text-main border-main bg-transparent normal-case font-semibold shadow-md hover:bg-white hover:border-main"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
