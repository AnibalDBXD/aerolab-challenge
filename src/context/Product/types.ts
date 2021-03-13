import { ISorts } from "../../components/Products/ProductSort/types";
import { IProduct } from "../../interfaces";
import ProductActions from "./ProductActions";

export interface IProductState {
    loading: boolean;
    allProducts: IProduct[];
    currentProducts: IProduct[];
    defaultProducts: IProduct[];
    currentSort: ISorts;
    SetCurrentProducts?: (newProducts: IProduct[]) => void;
    SetCurrentSort?: (newSort: ISorts) => void;
    SetAllProducts?: (newProducts: IProduct[]) => void;
}

export interface IProductActions {
    type: ProductActions;
    payload: IProduct[] | ISorts | boolean;
}
