import { useState, createContext } from "react";
export const ProductContext = createContext();
export const setProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  return (
    <ProductContext.Provider value={{ products }}>
      <setProductContext.Provider value={{ setProducts }}>
        {children}
      </setProductContext.Provider>
    </ProductContext.Provider>
  );
};
export default ProductProvider;
