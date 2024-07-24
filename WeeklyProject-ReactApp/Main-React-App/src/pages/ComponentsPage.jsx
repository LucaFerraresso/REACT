import CardTW from "../components/atoms/CardTW";
import MiniCard from "../components/atoms/miniCard";
import Card from "../components/atoms/Card";
import Card3 from "../components/atoms/Card3";
import Form from "../components/atoms/Form";
import SideMenu from "../components/atoms/SideMenu";

const ComponentsPage = () => {
  return (
    <>
      <div className="bg-green-300 flex flex-col justify-center text-center">
        <h1>pagina componenti</h1>
        <div className="flex flex-col gap-4">
          <h1>card 1</h1>
          <Card item={""} className="border-black " />
        </div>

        <div className="flex flex-col gap-4">
          {" "}
          <h1>card 2</h1>
          <CardTW item={""} className="border-black " />
        </div>

        <div className="flex flex-col gap-4">
          {" "}
          <h1>card 3</h1>
          <Card3 item={""} className="border-black" />
        </div>

        <div className="flex flex-col gap-4">
          <h1>mini card</h1>
          <MiniCard item={""} className="border-black " />
        </div>

        <div className="flex flex-col gap-4">
          {" "}
          <h1>form per la chiamata post,put</h1>
          <Form item={""} className="border-black " />
        </div>

        <div className="flex flex-col gap-4">
          <h1>sidemenu per le categorie</h1>
          <SideMenu className="border-black" />
        </div>
      </div>
    </>
  );
};

export default ComponentsPage;
