import { createPortal } from "react-dom";
const Modal = ({ onClose, isOpen, value }) => {
  return createPortal(
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6">
            <div className="flex flex-col items-center">
              <h1>TITLE:{value.title}</h1>
              <h2>ID:{value.id}</h2>
              <h2>USERID:{value.userId}</h2>
              <h2>COMPLETED:{value.completed}</h2>
              <button onClick={onClose}>Close</button>
            </div>
          </div>
        </div>
      )}
    </>,
    document.body
  );
};
export default Modal;
