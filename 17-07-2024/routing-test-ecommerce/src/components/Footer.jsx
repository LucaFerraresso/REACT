const menuFooter = [
  {
    id: 1,
    name: "About",
    link: "/about",
  },
  {
    id: 2,
    name: "Contact",
    link: "/contact",
  },
  {
    id: 3,
    name: "Privacy",
    link: "/privacy",
  },
  {
    id: 4,
    name: "Terms",
    link: "/terms",
  },
];

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-4">
      <ul className="flex space-x-4">
        {menuFooter.map((item, index) => (
          <li key={index}>
            <a href={item.link}>{item.name}</a>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
