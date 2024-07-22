import { useState, useEffect } from "react";
import Modal from "../components/atoms/Modal";
const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  //al click mi sposto alla pagina uno

  const toPageOne = () => {
    window.location.href = "/pageone";
  };
  const toPageTwo = () => {
    window.location.href = "/pagetwo";
  };
  const toPageThree = () => {
    window.location.href = "/pagethree";
  };
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
            className="bg-blue-500 text-bold text-white p-4 rounded-md uppercase underline"
          >
            WONNA SEE ALL THE TODOS?
          </h1>
          <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
            {" "}
            <h1 className="bg-blue-500  text-bold text-white p-4 rounded-md uppercase underline">
              WONNA SEE ALL THE TODOS?
            </h1>
          </Modal>
          <button onClick={toPageOne}>PAGE ONE</button>
        </div>
        {/*inizio div 1 app*/}

        {/*inizio div 2 app con modale */}
        <div className="flex flex-row justify-center items-center p-[16px] bg-orange-600 h-full w-full">
          {" "}
          <h1
            onClick={() => setIsModalOpen(true)}
            className="bg-green-500  text-bold text-white p-4 rounded-md uppercase underline"
          >
            GO TO "COMPLETED"
          </h1>
          <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
            {" "}
            <h1 className="bg-green-500  text-bold text-white p-4 rounded-md uppercase underline">
              GO TO COMPLETED
            </h1>
          </Modal>
          <button onClick={toPageTwo}>PAGE TWO</button>
        </div>
        {/*fine div 2 app*/}

        {/*inizio div 3 in app con modale*/}
        <div className="flex flex-row justify-center items-center p-[16px] bg-blue-600 h-full w-full">
          {" "}
          <h1
            onClick={() => setIsModalOpen(true)}
            className="bg-red-500  text-bold text-white p-4 rounded-md uppercase underline"
          >
            GO TO "NOT-COMPLETED"
          </h1>
          <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
            {" "}
            <h1 className="bg-red-500  text-bold text-white p-4 rounded-md uppercase underline">
              GO TO "NOT-COMPLETED"
            </h1>
          </Modal>
          <button onClick={toPageThree}>PAGE THREE</button>
        </div>
        {/*fine div 3 app*/}
      </div>
      {/*fine div app*/}
    </>
  );
};

export default HomePage;
