import { StyledProductsContainer } from "./styles";
import ProductPages from "./ProductPages";
import ProductSort from "./ProductSort";
import ProductList from "./ProductList";
import ProductProvider from "../../context/Product/ProductProvider";

const Products: React.FC = (): JSX.Element => {
    return (
        <ProductProvider>
            <StyledProductsContainer>
                <ProductPages VerticalBar>
                    <ProductSort />
                </ProductPages>
                <ProductList />
                <ProductPages />
            </StyledProductsContainer>
        </ProductProvider>
    );
};

export default Products;
