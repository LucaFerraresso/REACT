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
      <div className="grid grid-rows-3 grid-cols-3 gap-6 justify-center items-center p-[16px] bg-gray-300 h-full w-full">
        {/*inizio div 1 in app con modale*/}
        <div className="flex flex-row justify-between items-center p-[16px] bg-blue-700 h-full w-full">
          {" "}
          <h1
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-500 text-bold text-white p-2 rounded-md "
          >
            GO TO ALL TODOS?
          </h1>
          <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
            {" "}
            <h1 className="bg-blue-500  text-white p-2 rounded-md">
              GO TO ALL TODOS?
            </h1>
          </Modal>
          <button
            onClick={toPageOne}
            className="bg-blue-500 cursor-pointer text-white underline"
          >
            PAGE ONE
          </button>
        </div>
        {/*inizio div 1 app*/}

        {/*inizio div 2 app con modale */}
        <div className="flex flex-row justify-between items-center p-[16px] bg-green-700 h-full w-full">
          {" "}
          <h1
            onClick={() => setIsModalOpen(true)}
            className="bg-green-500  text-white p-2 rounded-md "
          >
            GO TO "COMPLETED"
          </h1>
          <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
            {" "}
            <h1 className="bg-green-500  text-bold text-white p-2 rounded-md ">
              GO TO COMPLETED
            </h1>
          </Modal>
          <button
            onClick={toPageTwo}
            className="bg-green-500 cursor-pointer text-white underline"
          >
            PAGE TWO
          </button>
        </div>
        {/*fine div 2 app*/}

        {/*inizio div 3 in app con modale*/}
        <div className="flex flex-row justify-between items-center p-[16px] bg-red-700 h-full w-full">
          {" "}
          <h1
            onClick={() => setIsModalOpen(true)}
            className="bg-red-500  text-white p-2 rounded-md "
          >
            GO TO "NOT-COMPLETED"
          </h1>
          <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
            {" "}
            <h1 className="bg-red-500  text-bold text-white p-2 rounded-md ">
              GO TO "NOT-COMPLETED"
            </h1>
          </Modal>
          <button
            onClick={toPageThree}
            className="bg-red-500 cursor-pointer text-white underline"
          >
            PAGE THREE
          </button>
        </div>
        {/*fine div 3 app*/}
      </div>
      {/*fine div app*/}
    </>
  );
};

export default HomePage;
