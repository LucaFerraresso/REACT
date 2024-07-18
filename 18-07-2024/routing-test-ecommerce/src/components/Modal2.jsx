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
        <div class="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div class="bg-white rounded-lg shadow-lg max-w-lg w-full p-6">
            <div class="flex flex-col items-center">
              <p class="text-gray-500 text-sm mb-2">{product.id}</p>

              <img
                src={product.images[2]}
                alt={product.title}
                className="w-[300px] h-[300px]"
              />

              <h2 class="text-xl font-semibold mb-2">{product.title}</h2>

              <p class="text-gray-600 mb-4 text-center">
                {product.description}
              </p>

              <p class="text-green-500 font-bold text-lg mb-4">
                {product.price}
              </p>

              <div class="flex space-x-4">
                <button
                  onClick={addItem}
                  class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Buy Now
                </button>
                <button class="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>,
    document.body
  );
};
export default Modal;
