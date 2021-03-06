import { ReactNode, useEffect, useReducer } from "react";
import { GetProductList } from "../../api";
import { initialState, ProductContext } from "./ProductContext";
import ProductReducer from "./ProductReducer";
import ProductActions from "./ProductActions";
import { IHistoryProducts, IProduct } from "../../interfaces";
import { ISorts } from "../../components/Products/ProductSort/types";

interface IProps {
    children: ReactNode;
}

const ProductProvider = ({ children }: IProps): JSX.Element => {
    const [state, dispatch] = useReducer(ProductReducer, initialState);

    useEffect((): void => {
        GetProductList().then((products) => {
            if (products) {
                SetDefaultProducts(products as IProduct[]);
                SetAllProducts(products as IProduct[]);
                SetLoading(false);
            }
        });
    }, []);

    const SetLoading = (isLoading: boolean): void => {
        dispatch({ type: ProductActions.SET_LOADING, payload: isLoading });
    };

    const SetDefaultProducts = (newProducts: IProduct[]): void => {
        dispatch({ type: ProductActions.SET_DEFAULT_PRODUCT, payload: newProducts });
    };

    const SetAllProducts = (newProducts: IProduct[]): void => {
        dispatch({ type: ProductActions.SET_ALL_PRODUCT, payload: newProducts });
    };

    const SetCurrentProducts = (newProducts: IProduct[]): void => {
        dispatch({ type: ProductActions.SET_CURRENT_PRODUCTS, payload: newProducts });
    };

    const SetCurrentSort = (newSort: ISorts): void => {
        dispatch({ type: ProductActions.SET_CURRENT_SORT, payload: newSort });
    };

    const setHistoryActive = (isActive: boolean): void => {
        dispatch({ type: ProductActions.SET_HISTORY_ACTIVE, payload: isActive });
    };

    const setHistory = (newHistoryProducts: IHistoryProducts[]): void => {
        dispatch({ type: ProductActions.SET_HISTORY, payload: newHistoryProducts });
    };

    return (
        <ProductContext.Provider
            value={{
                historyActive: state.historyActive,
                setHistoryActive,
                history: state.history,
                setHistory,
                SetLoading,
                loading: state.loading,
                defaultProducts: state.defaultProducts,
                SetAllProducts,
                allProducts: state.allProducts,
                currentProducts: state.currentProducts,
                SetCurrentProducts,
                currentSort: state.currentSort,
                SetCurrentSort
            }}>
            {children}
        </ProductContext.Provider>
    );
};

export default ProductProvider;
