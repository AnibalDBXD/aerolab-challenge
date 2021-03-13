import { createContext, useContext } from "react";
import { IProductState } from "./types";

export const initialState: IProductState = {
    allProducts: [],
    currentProducts: [],
    defaultProducts: [],
    currentSort: "MostRecent",
    loading: true
};

export const ProductContext = createContext<IProductState>(initialState);

export const useProductContext = (): IProductState => useContext(ProductContext);
