import { useState, createContext } from "react";
export const FavoriteContext = createContext();
export const setFavoriteContext = createContext();

const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  return (
    <FavoriteContext.Provider value={{ favorites }}>
      <setFavoriteContext.Provider value={{ setFavorites }}>
        {children}
      </setFavoriteContext.Provider>
    </FavoriteContext.Provider>
  );
};
export default FavoriteProvider;
