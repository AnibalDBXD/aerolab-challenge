import { StyledNotEnoughMoney } from "../Product/NotEnoughtMoney/styles";
import { StyledProductCategory } from "../Product/styles";
import styled from "styled-components";
import { Colors, FontSize } from "../../../../common/styles";

export const StyledPurchasedAmount = styled(StyledNotEnoughMoney)`
    background-color: ${Colors.transparentBlue};
`;

export const StyledCost = styled(StyledPurchasedAmount)`
    position: absolute;
    z-index: 1;
    left: 0;
    bottom: 0;
    top: auto;
    right: auto;
    margin-bottom: 16px;
    font-size: ${FontSize.small};
`;

export const StyledTimeAgo = styled(StyledProductCategory)`
    font-size: ${FontSize.smaller};
`;
