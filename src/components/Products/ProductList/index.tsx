import { StyledProductList } from "./styles";
import Product from "../Product";
import { IProductList } from "./types";

const ProductList: React.FC<IProductList> = ({ productList }: IProductList): JSX.Element => {
    return (
        <StyledProductList>
            {productList.map(({ _id, category, cost, img, name }) => (
                <Product category={category} cost={cost} img_src={img?.hdUrl} key={_id} name={name} />
            ))}
        </StyledProductList>
    );
};

export default ProductList;
