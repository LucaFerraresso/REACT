import { NavLink } from "react-router-dom";

const menulist = [
  {
    name: "Home",
    path: "/homepage",
  },
];

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 flex flex-col sm:flex-row justify-between items-center text-lg sm:text-2xl">
      <ul className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 m-0 w-full sm:w-auto">
        {menulist.map((item, index) => (
          <li key={index} className="text-center sm:text-left">
            <NavLink
              className={({ isActive }) =>
                isActive ? "font-bold text-green-400 underline" : ""
              }
              to={item.path}
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
