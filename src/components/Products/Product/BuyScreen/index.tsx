import { StyledBuyScreen, StyledPrice, StyledContainer, StyledButtonPrice, StyledBuyIcon } from "./styles";
import { Coin } from "../../../Icons";
import { IBuyScreen } from "./types";

const BuyScreen: React.FC<IBuyScreen> = ({ price }: IBuyScreen): JSX.Element => {
    return (
        <StyledBuyScreen>
            <StyledBuyIcon />
            <StyledContainer>
                <StyledPrice>
                    {price} <Coin size="26px" />
                </StyledPrice>
                <StyledButtonPrice>Redeem now</StyledButtonPrice>
            </StyledContainer>
        </StyledBuyScreen>
    );
};

export default BuyScreen;
