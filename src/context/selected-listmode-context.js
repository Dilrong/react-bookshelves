import React, { createContext, useContext, useState } from "react";

export const SelectedListModeContext = createContext();
export const SelectedListModeProvider = ({ children }) => {
  const [selectedListMode, setSectedListMode] = useState(true);

  return (
    <SelectedListModeContext.Provider
      value={{ selectedListMode, setSectedListMode }}
    >
      {children}
    </SelectedListModeContext.Provider>
  );
};

export const SelectedListModeValue = () => useContext(SelectedListModeContext);
