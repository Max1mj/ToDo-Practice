import Menu from "./Components/Menu";

import ModalProvider from "./Providers/ModalProvider";

import NotesProvider from "./Providers/NotesProvider";

import ThemeProvider from "./Providers/ThemeProvider";

const App = () => {
  return (
    <ThemeProvider>
      <NotesProvider>
        <ModalProvider>
          <Menu />
        </ModalProvider>
      </NotesProvider>
    </ThemeProvider>
  );
};

export default App;
