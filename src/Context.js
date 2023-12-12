import React, { useReducer } from "react";
import { createContext } from "react";

const productData = createContext();

export const Context = ({ children }) => {
  const dispatchFunction = (state, action) => {
    switch (action.type) {
      case "addToCart": {
        const prevData =
          JSON.parse(localStorage.getItem("productsInCart")) || [];
        prevData.push(action.value);
        localStorage.setItem("productsInCart", JSON.stringify(prevData));
        break;
      }

      default:
        return state;
    }
  };
  const [data, dispatch] = useReducer(
    dispatchFunction,
    JSON.parse(localStorage.getItem("productsInCart")) || []
  );

  return (
    <productData.Provider value={[data, dispatch]}>
      {children}
    </productData.Provider>
  );
};

export default productData;
