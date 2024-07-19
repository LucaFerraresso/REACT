import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { toDoContext } from "../providers/ToDoContext";

const menulist = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Services",
    path: "/services",
  },
  {
    name: "Contact",
    path: "/contact",
  },
  {
    name: "Shop",
    path: "/shop",
  },
];

const Navbar = () => {
  const { toDos } = useContext(toDoContext);
  return (
    <nav className="bg-gray-800 text-white p-4 ">
      <ul className="flex space-x-4 margin-0">
        {menulist.map((item, index) => (
          <li key={index}>
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
      <div className="bg-green-400 w-12 h-12 rounded-full flex justify-center items-center">
        {toDos.length}
      </div>
    </nav>
  );
};

export default Navbar;
