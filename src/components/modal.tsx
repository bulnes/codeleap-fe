import type { ReactNode } from "react";

interface ModalProps {
  children: ReactNode;
  isOpen?: boolean;
}

export const Modal = ({ children, isOpen }: ModalProps) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-full flex flex-row items-center justify-center z-30">
      <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-full bg-input opacity-50 z-10"></div>
      <div className="bg-white rounded-2xl z-20">{children}</div>
    </div>
  );
};
