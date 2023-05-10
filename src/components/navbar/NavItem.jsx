import { NavLink } from "react-router-dom";

const NavItem = ({ value, to }) => {
  return (
    <NavLink
      className={({ isActive }) =>
        isActive
          ? "bg-main shadow-md text-white border px-4 py-2 border-main font-semibold rounded lg:mt-0 mt-4"
          : "bg-white hover:bg-red-50 hover:shadow-md hover:text-main hover:border px-4 py-2 border-main font-semibold rounded lg:mt-0 mt-4"
      }
      to={to}
    >
      {value}
    </NavLink>
  );
};

export default NavItem;
