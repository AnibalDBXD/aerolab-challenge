import { StyledText, StyledButton } from "./styles";
import { StyledList } from "../styles";
import { ISorts } from "./types";
import { useProductContext } from "../../../context/Product/ProductContext";
import { IProduct } from "../../../interfaces";

const ProductSort: React.FC = (): JSX.Element => {
    const Sorts: { name: string; type: ISorts; _id: number }[] = [
        { name: "Most recent", type: "MostRecent", _id: 1 },
        { name: "Lowest price", type: "LowestPrice", _id: 2 },
        { name: "Highest price", type: "HighestPrice", _id: 3 }
    ];

    const { SetCurrentSort, SetAllProducts, currentSort, allProducts, defaultProducts } = useProductContext();

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
            <StyledText>Sort by:</StyledText>
            {Sorts.map(({ name, type, _id }) => (
                <StyledButton className={`${currentSort === type && "active"}`} key={_id} onClick={(): void => handleClick(type)}>
                    {name}
                </StyledButton>
            ))}
        </StyledList>
    );
};

export default ProductSort;
