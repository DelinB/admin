import { createContext, useContext, useState } from "react";

// Create the Context
const CommonContext = createContext(null);

// Provider Component
export const CommonStateProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  // const [formData,setformdata]= useState({})



  

  return (
    <CommonContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </CommonContext.Provider>
  );
};

// Custom Hook for Consistency
export const useCommon = () => {
  const context = useContext(CommonContext);
  if (!context) {
    throw new Error("useCommon must be used within a CommonStateProvider");
  }
  return context;
};

export default CommonContext;
