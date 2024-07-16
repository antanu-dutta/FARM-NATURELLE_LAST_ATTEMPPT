import { createContext, useContext } from "react";
import { products } from "../data assets/Products";
const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  return useContext(ProductContext);
};

export default ProductContextProvider;
