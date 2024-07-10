import Header from "../Sections/Header/Header";
import Footer from "../Sections/Footer/Footer";
import styles from "./Layout.module.css";
import Main from "../Sections/Main/Main";

const Layout = ({ children }) => {
  return (
    <>
      <Header>
        <div>
          <button
            onClick={(e) => console.log(e.target.innerText)}
            className="children1"
          >
            Header's children
          </button>
        </div>
      </Header>
      {children}

      <Main />
      {children}

      <Footer>
        <div>
          <button
            onClick={(e) => console.log(e.target.innerText)}
            className="children2"
          >
            Footer's children
          </button>
        </div>
      </Footer>
      {children}
    </>
  );
};
export default Layout;
