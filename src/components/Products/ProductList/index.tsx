import { StyledProductList } from "./styles";
import Product from "./Product";
import ProductLoader from "./ProductLoader";
import { useProductContext } from "../../../context/Product/ProductContext";
import HistoryProduct from "./HistoryProduct";
import { useEffect, useState } from "react";
import map from "underscore";
import { IHistoryProducts } from "../../../interfaces";

const ProductList: React.FC = (): JSX.Element => {
    const { currentProducts, loading, history, historyActive } = useProductContext();
    const [HistoryProducts, setHistoryProducts] = useState<IHistoryProducts[]>([]);

    const FilterDuplicateProducts = (Products: IHistoryProducts[]): IHistoryProducts[] => {
        return map.unique(Products, false, (Products) => Products.productId);
    };

    useEffect(() => {
        setHistoryProducts(FilterDuplicateProducts(history));
    }, [history]);

    return (
        <StyledProductList>
            {loading ? (
                <>
                    <ProductLoader />
                    <ProductLoader />
                    <ProductLoader />
                    <ProductLoader />
                    <ProductLoader />
                    <ProductLoader />
                    <ProductLoader />
                    <ProductLoader />
                    <ProductLoader />
                    <ProductLoader />
                    <ProductLoader />
                    <ProductLoader />
                    <ProductLoader />
                    <ProductLoader />
                    <ProductLoader />
                    <ProductLoader />
                </>
            ) : historyActive ? (
                HistoryProducts.map(({ _id, category, cost, createDate, name, img, productId }, i) => (
                    <HistoryProduct
                        PurchasedAmount={history.filter((item) => item.productId === productId).length /* Filter all products wit the same Id and get the array's length */}
                        _id={_id}
                        category={category}
                        cost={cost}
                        createDate={createDate}
                        img_src={img?.hdUrl || img?.url}
                        key={i}
                        name={name}
                        productId={productId}
                    />
                ))
            ) : (
                currentProducts.map(({ _id, category, cost, img, name }) => <Product _id={_id} category={category} cost={cost} img_src={img?.hdUrl || img?.url} key={_id} name={name} />)
            )}
        </StyledProductList>
    );
};

export default ProductList;
