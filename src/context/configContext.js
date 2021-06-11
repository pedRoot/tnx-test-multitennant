import { createContext, useContext, useState } from "react";
import useSelectTennant from "../hooks/useSelectTennant";

export const ConfigContext = createContext();

export const ConfigProvider = ({ children }) => {
  const [config, setConfig] = useState(useSelectTennant());

  return (
    <ConfigContext.Provider value={config}>
      {children}
    </ConfigContext.Provider>
  );
}

export function useConfigContext() {
  const context = useContext(ConfigContext);

  if (!context) {
    console.error('Error deploying App Context!!!');
  }

  return context;
}
