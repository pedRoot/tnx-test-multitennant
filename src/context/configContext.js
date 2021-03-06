import { createContext, useContext, useState } from "react";
import useSelectTennant from "../hooks/useSelectTennant";
import configByTennant from "../settings";

export const ConfigContext = createContext();

export const ConfigProvider = ({ children }) => {
  const [configToTennant, setConfigToTennant] = useState(useSelectTennant());

  const handleChangeConfig = (tennant = null) => {
    const tennantSelect = tennant || process.env.REACT_APP_TENNANT;
      
    let getConfigByTennant = {
      ...configByTennant['configBase'],
      ...configByTennant[tennantSelect]
    };
    getConfigByTennant.tennantActive = tennantSelect;
    setConfigToTennant(() => getConfigByTennant);
  }

  return (
    <ConfigContext.Provider value={{ configToTennant, handleChangeConfig }}>
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
