import { useState, createContext } from "react";
export const toDoContext = createContext();
export const setToDoContext = createContext();
const toDoProvider = ({ children }) => {
  const [toDos, setToDos] = useState([]);

  return (
    <toDoContext.Provider value={{ toDos }}>
      <setToDoContext.Provider value={{ setToDos }}>
        {children}
      </setToDoContext.Provider>
    </toDoContext.Provider>
  );
};

export default toDoProvider;
