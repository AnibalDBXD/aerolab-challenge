import { ReactNode } from "react";
import { ISorts } from "../components/Products/ProductSort/types";
import { IProduct } from "../interfaces";
import ProductActions from "./Product/ProductActions";

export interface IState {
    children: ReactNode;
}

export interface IProductState {
    allProducts: IProduct[];
    currentProducts: IProduct[];
    defaultProducts: IProduct[];
    currentSort: ISorts;
    SetCurrentProducts?: (newProducts: IProduct[]) => void;
    SetCurrentSort?: (newSort: ISorts) => void;
    SetAllProducts?: (newProducts: IProduct[]) => void;
}

export interface IUserState {
    user: {
        name: string;
        coins: number;
    };
}

export interface IActions {
    type: ProductActions;
    payload: IProduct[] | ISorts;
}
