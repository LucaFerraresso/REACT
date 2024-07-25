import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../../providers/ProductContext";
import { FavoriteContext } from "../../providers/FavoriteContext";

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
  const { products } = useContext(ProductContext);
  const { favorites } = useContext(FavoriteContext);
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
      <div className="flex space-x-4">
        <span>Products: {products.length}</span>
        <span>Favorites: {favorites.length}</span>
      </div>
    </nav>
  );
};

export default Navbar;
