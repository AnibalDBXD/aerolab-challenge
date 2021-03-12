import { StyledProductList } from "./styles";
import Product from "./Product";
import ProductLoader from "./ProductLoader";
import { useProductContext } from "../../../context/Product/ProductContext";

const ProductList: React.FC = (): JSX.Element => {
    const { currentProducts, loading } = useProductContext();

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
            ) : (
                currentProducts.map(({ _id, category, cost, img, name }) => <Product _id={_id} category={category} cost={cost} img_src={img?.hdUrl || img?.url} key={_id} name={name} />)
            )}
        </StyledProductList>
    );
};

export default ProductList;
