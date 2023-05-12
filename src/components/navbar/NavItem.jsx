import { NavLink } from "react-router-dom";

const NavItem = ({ value, to }) => {
  return (
    <NavLink
      className={({ isActive }) =>
        isActive
          ? "bg-main shadow-md text-white border px-4 py-2 border-main font-semibold rounded lg:mt-0 mt-4"
          : "bg-transparent text-xl text-white hover:bg-white hover:shadow-md hover:text-main px-4 py-2 font-semibold rounded lg:mt-0 mt-4"
      }
      to={to}
    >
      {value}
    </NavLink>
  );
};

export default NavItem;
