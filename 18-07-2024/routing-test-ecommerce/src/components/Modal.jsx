//devo importare una libreria da react-dom per costruire una modale
import { createPortal } from "react-dom";
const Modal = ({ onClose, isOpen, product }) => {
  const addItem = () => {
    const cartItem = JSON.stringify(product);
    localStorage.setItem("product", cartItem);
  };
  return createPortal(
    <>
      {isOpen && (
        <div className="w-full h-full fixed top-0 left-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/60">
          <div className="w-[800px] h-[800px] p-16 bg-white flex flex-col justify-center item-center z-50">
            <h1>{product.id}</h1>
            <img
              src={product.images[2]}
              alt={product.title}
              className="w-[300px] h-[300px]"
            />
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <button onClick={onClose}>CLOSE</button>
            <button onClick={addItem}>ADD TO CART</button>
          </div>
        </div>
      )}
    </>,
    document.body
  );
};
export default Modal;
