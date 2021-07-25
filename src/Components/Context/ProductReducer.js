import { createContext, useContext, useReducer } from "react";
import productsData from "../../Products Data/products.json";

const initState = {
  products: productsData,
  sortBySize: "",
  sortByPrice: "",
  sortByBrand: "",
  sortByIdealFor: "",
};

const productReducer = (state, action) => {
  console.log("from reducer", action);
  switch (action.type) {
    case "SORT_BY_SIZE":
      return { ...state, sortBySize: action.payload };
    case "SORT_BY_PRICE":
      return { ...state, sortByPrice: action.payload };
    case "SORT_BY_BRAND":
      return { ...state, sortByBrand: action.payload };
    case "SORT_BY_IDEAL_FOR":
      return { ...state, sortByIdealFor: action.payload };
    case "CLEAR_FILTERS":
      return {
        ...state,
        sortBySize: "",
        sortByPrice: "",
        sortByBrand: "",
        sortByIdealFor: "",
      };
    default:
      return state;
  }
};

export const ProductContext = createContext();
export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initState);

  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => {
  return useContext(ProductContext);
};
