//devo importare una libreria da react-dom per costruire una modale
import { createPortal } from "react-dom";
const Modal = () => {
  //devo passargli le info delle card

  return createPortal(
    <div>
      <p>Modal</p>
    </div>,
    document.getElementById("modal")
  );
};
export default Modal;
