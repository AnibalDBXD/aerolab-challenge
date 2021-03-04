import { StyledText, StyledButton } from "./styles";
import { StyledList } from "../styles";
import { IProductFilter } from "./types";

const ProductFilter: React.FC<IProductFilter> = ({ HandleMostRecent, HandleLowestPrice, HandleHighestPrice }: IProductFilter): JSX.Element => {
    return (
        <StyledList>
            <StyledText>Sort by:</StyledText>
            {HandleMostRecent && (
                <StyledButton className="active" onClick={HandleMostRecent}>
                    Most recent
                </StyledButton>
            )}
            {HandleLowestPrice && (
                <StyledButton className="active" onClick={HandleLowestPrice}>
                    Lowest price
                </StyledButton>
            )}
            {HandleHighestPrice && (
                <StyledButton className="active" onClick={HandleHighestPrice}>
                    Highest price
                </StyledButton>
            )}
        </StyledList>
    );
};

export default ProductFilter;
