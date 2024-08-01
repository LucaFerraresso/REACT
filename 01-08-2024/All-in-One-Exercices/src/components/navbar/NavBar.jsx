import { NavLink } from "react-router-dom";

const menulist = [
  {
    name: "Home",
    path: "/HomePage",
  },
  {
    name: "Others",
    path: "/Others",
  },
];

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 flex h-[100px] flex-row justify-center items-center text-2xl">
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
