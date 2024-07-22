import { useState, useEffect } from "react";
import Modal from "./components/atoms/Modal";
function App() {
  //commentare su html
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {" "}
      {/*inizio div app*/}
      <div className="flex flex-col justify-center items-center p-[16px] bg-red-600 h-full w-full">
        {/*inizio div 1 in app con modale*/}
        <div className="flex flex-row justify-center items-center p-[16px] bg-gray-600 h-full w-full">
          {" "}
          <h1
            onClick={() => setIsModalOpen(true)}
            className="bg-green-500 text-3xl text-bold text-white p-4 rounded-md uppercase underline"
          >
            helloWord
          </h1>
          <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
            {" "}
            <h1 className="bg-green-500 text-3xl text-bold text-white p-4 rounded-md uppercase underline">
              helloWord
            </h1>
          </Modal>
        </div>
        {/*inizio div 1 app*/}

        {/*inizio div 2 app con modale*/}
        <div className="flex flex-col justify-center items-center p-[16px] bg-orange-600 h-full w-full">
          {" "}
          <h1
            onClick={() => setIsModalOpen(true)}
            className="bg-green-500 text-3xl text-bold text-white p-4 rounded-md uppercase underline"
          >
            helloWord
          </h1>
          <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
            {" "}
            <h1 className="bg-green-500 text-3xl text-bold text-white p-4 rounded-md uppercase underline">
              helloWord
            </h1>
          </Modal>
        </div>
        {/*fine div 2 app*/}

        {/*inizio div 3 in app con modale*/}
        <div className="flex flex-row justify-center items-center p-[16px] bg-blue-600 h-full w-full">
          {" "}
          <h1
            onClick={() => setIsModalOpen(true)}
            className="bg-green-500 text-3xl text-bold text-white p-4 rounded-md uppercase underline"
          >
            helloWord
          </h1>
          <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
            {" "}
            <h1 className="bg-green-500 text-3xl text-bold text-white p-4 rounded-md uppercase underline">
              helloWord
            </h1>
          </Modal>
        </div>
        {/*fine div 3 app*/}
      </div>
      {/*fine div app*/}
    </>
  );
}

export default App;
