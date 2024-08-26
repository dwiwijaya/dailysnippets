import { createContext, useContext, useState, useCallback } from 'react';

const RefetchContext = createContext();

export const RefetchProvider = ({ children }) => {
  const [refetchFlag, setRefetchFlag] = useState(0);

  const triggerRefetch = useCallback(() => {
    setRefetchFlag((prev) => prev + 1);
  }, []);

  return (
    <RefetchContext.Provider value={{ refetchFlag, triggerRefetch }}>
      {children}
    </RefetchContext.Provider>
  );
};

export const useRefetch = () => {
  return useContext(RefetchContext);
};
