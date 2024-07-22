import { NavLink } from "react-router-dom";

const menulist = [
  {
    name: "Home",
    path: "/App",
  },
  {
    name: "HomePage",
    path: "/homepage",
  },
  {
    name: "ALL TODOS",
    path: "/pageone",
  },
  {
    name: "COMPLETED",
    path: "/pagetwo",
  },
  {
    name: "NOT-COMPLETED",
    path: "pagethree",
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
