"use client";
import { useContext, useState } from "react";
import { createContext } from "react";

const DataContext = createContext(null);

const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};
export default DataProvider;

export const useDataContext = () => {
  const result = useContext(DataContext);
  if (result === undefined) {
    return console.error("outside of the context");
  }
  return result;
};
