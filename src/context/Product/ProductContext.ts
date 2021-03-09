import { createContext } from "react";
import { IProductState } from "../types";

export const initialState: IProductState = {
    allProducts: [],
    currentProducts: [],
    defaultProducts: [],
    currentSort: "MostRecent"
};

const ProductContext = createContext<IProductState>(initialState);

export default ProductContext;
