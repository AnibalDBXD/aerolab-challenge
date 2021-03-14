import { StyledText, StyledButton } from "./styles";
import { StyledList } from "../styles";
import { ISorts } from "./types";
import { useProductContext } from "../../../context/Product/ProductContext";
import { IProduct } from "../../../interfaces";
import { Sorts } from "./constants";
import ShowHistory from "./ShowHistory";

const ProductSort: React.FC = (): JSX.Element => {
    const { SetCurrentSort, SetAllProducts, currentSort, allProducts, defaultProducts, historyActive } = useProductContext();

    const ProductSorter = (Sort: ISorts): IProduct[] => {
        switch (Sort) {
            case "HighestPrice":
                return [...allProducts].sort((a, b) => b.cost - a.cost);

            case "LowestPrice":
                return [...allProducts].sort((a, b) => a.cost - b.cost);

            default:
                return defaultProducts;
        }
    };

    const handleClick = (type: ISorts): void => {
        if (currentSort === type) return;
        SetAllProducts && SetAllProducts(ProductSorter(type));
        SetCurrentSort && SetCurrentSort(type);
    };

    return (
        <StyledList>
            {!historyActive && (
                <>
                    <StyledText>Sort by:</StyledText>
                    {Sorts.map(({ name, type, _id }) => (
                        <StyledButton className={`${currentSort === type && "active"}`} key={_id} onClick={(): void => handleClick(type)}>
                            {name}
                        </StyledButton>
                    ))}
                </>
            )}
            <ShowHistory />
        </StyledList>
    );
};

export default ProductSort;
