import Menu from "./Components/Menu";

import WrapperProvider from "./utils/WrapperProvider";

const App = () => {
  return (
    <WrapperProvider>
      <Menu />
    </WrapperProvider>
  );
};

export default App;
