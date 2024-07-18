import { NavLink } from "react-router-dom";
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
  return (
    <nav className="bg-gray-800 text-white p-4 ">
      <ul className="flex space-x-4 margin-0">
        {menulist.map((item, index) => (
          <li key={index}>
            <NavLink to={item.path}>{item.name}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
