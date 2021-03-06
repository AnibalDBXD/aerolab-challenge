import { IProductActions } from "./types";
import { IProductState } from "./types";
import ProductActions from "./ProductActions";
import { IProduct, IHistoryProducts } from "../../interfaces";
import { ISorts } from "../../components/Products/ProductSort/types";

const ProductReducer = (state: IProductState, action: IProductActions): IProductState => {
    const { payload, type } = action;

    switch (type) {
        case ProductActions.SET_HISTORY_ACTIVE:
            return {
                ...state,
                historyActive: payload as boolean
            };

        case ProductActions.SET_HISTORY:
            return {
                ...state,
                history: payload as IHistoryProducts[]
            };

        case ProductActions.SET_LOADING:
            return {
                ...state,
                loading: payload as boolean
            };

        case ProductActions.SET_DEFAULT_PRODUCT:
            return {
                ...state,
                defaultProducts: payload as IProduct[]
            };

        case ProductActions.SET_ALL_PRODUCT:
            return {
                ...state,
                allProducts: payload as IProduct[]
            };

        case ProductActions.SET_CURRENT_PRODUCTS:
            return {
                ...state,
                currentProducts: payload as IProduct[]
            };

        case ProductActions.SET_CURRENT_SORT:
            return {
                ...state,
                currentSort: payload as ISorts
            };

        default:
            return state;
    }
};

export default ProductReducer;
