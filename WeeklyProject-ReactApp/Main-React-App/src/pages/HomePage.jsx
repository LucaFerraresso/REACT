import SideMenu from "../components/atoms/SideMenu";

const HomePage = () => {
  return (
    <div className="bg-blue-300 min-h-screen font-bold flex">
      <SideMenu />
      <div className="flex-grow p-6">
        <h1>contenuto da aggiungere</h1>
      </div>
    </div>
  );
};

export default HomePage;
