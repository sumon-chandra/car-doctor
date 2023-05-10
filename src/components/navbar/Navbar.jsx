import { GrShop, GrSearch } from "react-icons/gr";

import logo from "../../assets/logo.png";
import NavItem from "./NavItem";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar fixed lg:px-36 px-4 py-3 z-10 bg-gradient-to-b from-black to-[rgba(21, 21, 21, 0)]">
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
          <span>Car doctor</span>
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
          <li>
            <NavItem value="Contact" to="/contact" />
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="indicator text-2xl flex gap-4 mr-4">
          <GrShop />
          {/* <span className="badge badge-sm indicator-item">8</span> */}
          <GrSearch />
        </div>

        <a className="btn text-main border-main bg-white normal-case font-semibold shadow-md hover:bg-red-50 hover:border-main">
          Appointment
        </a>
      </div>
    </div>
  );
};

export default Navbar;
