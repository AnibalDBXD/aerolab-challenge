import { ReactNode } from "react";
import { ISorts } from "../components/Products/ProductSort/types";
import { IProduct, IRedeemHistory } from "../interfaces";
import ProductActions from "./Product/ProductActions";
import UserActions from "./User/UserActions";

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
    _id: string;
    name: string;
    points: number;
    redeemHistory: IRedeemHistory[];
    createDate: Date;
    SetPoints?: (newPoints: number) => void;
}

export interface IProductActions {
    type: ProductActions;
    payload: IProduct[] | ISorts;
}

export interface IUserActions {
    type: UserActions;
    payload: IUserState | number;
}
