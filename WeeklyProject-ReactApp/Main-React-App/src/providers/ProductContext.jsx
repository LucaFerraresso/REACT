import { useState, createContext } from "react";
const ProductContext = createContext();
const setProductContext = createContext();
const ProductProvider = () => {
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
