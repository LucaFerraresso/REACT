import { NavLink } from "react-router-dom";
import { useContext } from "react";

const menulist = [
  {
    name: "Home",
    path: "/homepage",
  },
  {
    name: "Products",
    path: "/Products",
  },

  {
    name: "COMPONENTS",
    path: "pagefour",
  },
  {
    name: "FAVORITES",
    path: "Favorites",
  },
  {
    name: "SHOP",
    path: "Shop",
  },
];

const Navbar = () => {
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
      <div>
        <h1>SHOP,qui visualizzo il numero di prodotti inseriti nel carrello</h1>
      </div>
      <div>
        <h1>
          FAVORITES,qui visualizzo il numero di prodotti inseriti nel lista
          favorites
        </h1>
      </div>
    </nav>
  );
};

export default Navbar;
