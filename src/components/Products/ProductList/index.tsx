import { StyledProductList } from "./styles";
import Product from "./Product";
import { useProductContext } from "../../../context/Product/ProductContext";

const ProductList: React.FC = (): JSX.Element => {
    const { currentProducts } = useProductContext();

    return (
        <StyledProductList>
            {currentProducts.map(({ _id, category, cost, img, name }) => (
                <Product _id={_id} category={category} cost={cost} img_src={img?.hdUrl || img?.url} key={_id} name={name} />
            ))}
        </StyledProductList>
    );
};

export default ProductList;
