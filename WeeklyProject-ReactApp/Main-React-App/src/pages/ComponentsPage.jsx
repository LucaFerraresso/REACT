import Form from "../components/atoms/Form";

const ComponentsPage = () => {
  return (
    <>
      <div className="bg-green-300 flex flex-col justify-center text-center">
        <div className="flex flex-col gap-4">
          {" "}
          <h1>form per la chiamata post,put</h1>
          <h1>pagina provvisoria</h1>
          <Form item={""} className="border-black " />
        </div>
      </div>
    </>
  );
};

export default ComponentsPage;
