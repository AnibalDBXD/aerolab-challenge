import { ISorts } from "../../components/Products/ProductSort/types";
import { IHistoryProducts, IProduct } from "../../interfaces";
import ProductActions from "./ProductActions";

export interface IProductState {
    loading: boolean;
    SetLoading?: (isLoading: boolean) => void;

    allProducts: IProduct[];
    currentProducts: IProduct[];
    defaultProducts: IProduct[];
    SetCurrentProducts?: (newProducts: IProduct[]) => void;
    SetAllProducts?: (newProducts: IProduct[]) => void;

    currentSort: ISorts;
    SetCurrentSort?: (newSort: ISorts) => void;

    historyActive: boolean;
    history: IHistoryProducts[];
    setHistory?: (newHistoryProducts: IHistoryProducts[]) => void;
    setHistoryActive?: (isActive: boolean) => void;
}

export interface IProductActions {
    type: ProductActions;
    payload: IProduct[] | ISorts | boolean | IHistoryProducts[];
}
