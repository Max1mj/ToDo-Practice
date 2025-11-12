import type { FC } from "react";
import ThemeProvider from "../Providers/ThemeProvider";
import NotesProvider from "../Providers/NotesProvider";
import ModalProvider from "../Providers/ModalProvider";

type ProviderWrapperType = {
  children: React.ReactNode;
};

const WrapperProvider: FC<ProviderWrapperType> = ({ children }) => {
  return (
    <ThemeProvider>
      <NotesProvider>
        <ModalProvider>{children}</ModalProvider>
      </NotesProvider>
    </ThemeProvider>
  );
};

export default WrapperProvider;
