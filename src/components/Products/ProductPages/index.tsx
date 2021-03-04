import { TProductPages } from "./types";
import { Text } from "../../Text";
import { StyledButtonContainer, StyledButton, StyledVerticalBar } from "./styles";
import { ArrowLeft, ArrowRight } from "../../Icons";
import { StyledInfoPages } from "./styles";

const ProductPages: React.FC<TProductPages> = ({ NumberOfProducts, children, VerticalBar, changePages, CanLeft, CanRight }: TProductPages): JSX.Element => (
    <StyledInfoPages>
        <Text>{NumberOfProducts}</Text>
        {VerticalBar && <StyledVerticalBar />}
        {children}
        <StyledButtonContainer>
            {CanLeft && (
                <StyledButton onClick={(): void => changePages.left()}>
                    <ArrowLeft />
                </StyledButton>
            )}
            {CanRight && (
                <StyledButton onClick={(): void => changePages.right()}>
                    <ArrowRight />
                </StyledButton>
            )}
        </StyledButtonContainer>
    </StyledInfoPages>
);

export default ProductPages;
