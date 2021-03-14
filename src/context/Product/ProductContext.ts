import { createContext, useContext } from "react";
import { IProductState } from "./types";

export const initialState: IProductState = {
    allProducts: [],
    currentProducts: [],
    defaultProducts: [],
    history: [],
    currentSort: "MostRecent",
    historyActive: false,
    loading: true
};

export const ProductContext = createContext<IProductState>(initialState);

export const useProductContext = (): IProductState => useContext(ProductContext);
