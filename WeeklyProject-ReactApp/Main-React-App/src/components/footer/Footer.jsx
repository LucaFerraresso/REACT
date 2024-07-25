import { NavLink } from "react-router-dom";

const menuFooter = [
  {
    name: "Home",
    path: "HomePage",
  },
  {
    name: "Shop",
    path: "/shop",
  },
];

const Footer = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 ">
      <ul className="flex space-x-4 margin-0">
        {menuFooter.map((item, index) => (
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

export default Footer;
