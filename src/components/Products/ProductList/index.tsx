import { StyledProductList } from "./styles";
import Product from "../Product";
import { useContext } from "react";
import ProductContext from "../../../context/Product/ProductContext";

const ProductList: React.FC = (): JSX.Element => {
    const { currentProducts } = useContext(ProductContext);

    return (
        <StyledProductList>
            {currentProducts.map(({ _id, category, cost, img, name }) => (
                <Product category={category} cost={cost} img_src={img?.hdUrl} key={_id} name={name} />
            ))}
        </StyledProductList>
    );
};

export default ProductList;
