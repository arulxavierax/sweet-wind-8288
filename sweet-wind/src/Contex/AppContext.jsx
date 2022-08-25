import { useState } from "react";
import { createContext } from "react";

export const AppContext = createContext();

function AppContextProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);
  const loginUser = () => {
    setIsAuth(true);
  };
  const logoutUser=()=>{
    setIsAuth(false)
  }
  return (
    <AppContext.Provider value={{ isAuth, loginUser,logoutUser }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
