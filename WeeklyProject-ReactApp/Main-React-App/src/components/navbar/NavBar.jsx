import { NavLink } from "react-router-dom";

const menulist = [
  {
    name: "/App",
    path: "/App",
  },
  {
    name: "Home",
    path: "/homepage",
  },
  {
    name: "API 1",
    path: "/pageone",
  },
  {
    name: "API 2",
    path: "/pagetwo",
  },
  {
    name: "API 3",
    path: "pagethree",
  },
  {
    name: "COMPONENTS",
    path: "pagefour",
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
    </nav>
  );
};

export default Navbar;
