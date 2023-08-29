import { useContext, createContext, useState } from "react";


const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [filters, setFilters] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState(null);


  return (
    <AppContext.Provider
      value={{
        filters,
        setFilters,
        filteredJobs,
        setFilteredJobs,

      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
