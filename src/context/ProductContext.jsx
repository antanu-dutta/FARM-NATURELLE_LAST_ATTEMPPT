import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/ProductReducer";
import { Products } from "../data assets/Products";

const ProductContext = createContext();
const InitialValue = {
  TotalProducts: [],
  shopByConcernProducts: [],
};

const ProductContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, InitialValue);
  const getAllProduct = () => {
    dispatch({ type: "GET_ALL_PRODUCTS", payload: Products });
  };
  const getShopByConcern = () => {
    const shopByConcern = Products.filter(
      (curProduct) => curProduct.category === "Honey"
    );
    dispatch({ type: "GET_SHOP_BY_CONCERN", payload: shopByConcern });
  };
  return (
    <ProductContext.Provider value={{ ...state, getAllProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  return useContext(ProductContext);
};

export default ProductContextProvider;
