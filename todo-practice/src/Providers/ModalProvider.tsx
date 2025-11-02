import { useState, type FC } from "react";
import { ModalContext } from "../Contexts/ModalContext";

type ModalProviderType = {
  children: React.ReactNode;
};

const ModalProvider: FC<ModalProviderType> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onPress = (state: boolean) => {
    setIsOpen(state);
  };

  return (
    <ModalContext value={{ state: isOpen, onPress }}>{children}</ModalContext>
  );
};

export default ModalProvider;
