import SideMenu from "../components/atoms/SideMenu";
const HomePage = () => {
  return (
    <div className="container">
      <h1 className="text-center">Welcome to the Home Page</h1>
      <h1>inserisco un menu con tre pulsanti</h1>
      <h1>il primo rimanda a tutti i prodotti</h1>
      <h1>il secondo rimanda alle categorie</h1>
      <h1>il terzo rimanda allo shop</h1>
      <SideMenu />
    </div>
  );
};

export default HomePage;
