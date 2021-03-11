import { ReactNode, useEffect, useReducer } from "react";
import { GetProductList } from "../../api";
import { initialState, ProductContext } from "./ProductContext";
import ProductReducer from "./ProductReducer";
import ProductActions from "./ProductActions";
import { IProduct } from "../../interfaces";
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
            }
        });
    }, []);

    const SetDefaultProducts = (newProducts: IProduct[]): void => {
        dispatch({ type: ProductActions.SET_DEFAULT_PRODUCT, payload: newProducts });
    };

    const SetAllProducts = (newProducts: IProduct[]): void => {
        dispatch({ type: ProductActions.SET_ALL_PRODUCT, payload: newProducts });
    };

    const SetCurrentProducts = (newProducts: IProduct[] = []): void => {
        dispatch({ type: ProductActions.SET_CURRENT_PRODUCTS, payload: newProducts });
    };

    const SetCurrentSort = (newSort: ISorts): void => {
        dispatch({ type: ProductActions.SET_CURRENT_SORT, payload: newSort });
    };

    return (
        <ProductContext.Provider
            value={{
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
