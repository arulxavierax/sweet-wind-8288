import { useState } from "react";
import { createContext } from "react";

export const AppContext = createContext();

function AppContextProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);
  const loginUser = () => {
    setIsAuth(true);
  };
  return (
    <AppContext.Provider value={{ isAuth, loginUser }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
