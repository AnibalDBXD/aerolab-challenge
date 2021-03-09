import { StyledText, StyledButton } from "./styles";
import { StyledList } from "../styles";
import { ISorts } from "./types";
import ProductContext from "../../../context/Product/ProductContext";
import { useContext } from "react";
import { IProduct } from "../../../interfaces";

const ProductSort: React.FC = (): JSX.Element => {
    const Sorts: { name: string; type: ISorts }[] = [
        { name: "Most recent", type: "MostRecent" },
        { name: "Lowest price", type: "LowestPrice" },
        { name: "Highest price", type: "HighestPrice" }
    ];

    const { SetCurrentSort, currentSort, SetAllProducts, allProducts, defaultProducts } = useContext(ProductContext);

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
        SetAllProducts && SetAllProducts(ProductSorter(type));
        SetCurrentSort && SetCurrentSort(type);
    };

    return (
        <StyledList>
            <StyledText>Sort by:</StyledText>
            {Sorts.map(({ name, type }, i) => (
                <StyledButton className={`${currentSort === type && "active"}`} key={i} onClick={(): void => handleClick(type)}>
                    {name}
                </StyledButton>
            ))}
        </StyledList>
    );
};

export default ProductSort;
