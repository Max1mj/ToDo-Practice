import { createContext } from "react";

type ModalContextType = {
  state: boolean;
  onPress: (state: boolean) => void;
};

export const ModalContext = createContext<ModalContextType>({
  state: true,
  onPress: () => {},
});
