import { ReactElement, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

type props = {
  children: ReactElement;
};

function Modal({ children }: props) {
  const ref = useRef<HTMLDivElement | null>(null);

  if (!ref.current) {
    ref.current = document.createElement("div");
  }
  useEffect(() => {
    const modal = document.getElementById("modal");
    if (modal && ref.current) {
      modal.appendChild(ref.current);
    }
    return () => {
      if (modal && ref.current) {
        modal.removeChild(ref.current);
      }
    };
  }, []);

  return createPortal(children, ref.current);
}

export default Modal;
