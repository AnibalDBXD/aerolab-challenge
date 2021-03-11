import styled, { keyframes } from "styled-components";
import { Colors, Spacing, borderRadius, FontSize } from "../../../../../common/styles";
import { BuyCoins2, BuyCoins3, BuyCoins4 } from "../../../../Icons";

const centerFlex = `
    margin-left: auto;
    margin-right: auto;
    display: flex;
`;

const Animation = keyframes`
    0% {
        transform: scale(1) translateY(0px);
        opacity: 0;
        box-shadow: 0 0 0 rgba(241, 241, 241, 0);
    }
    1% {
        transform: scale(0.96) translateY(10px);
        opacity: 0;
        box-shadow: 0 0 0 rgba(241, 241, 241, 0);
    }
    100% {
        transform: scale(1) translateY(0px);
        opacity: 1;
        box-shadow: 0 0 500px rgba(241, 241, 241, 0);
    }
    }
`;

export const StyledBuyCoinsContainer = styled.div`
    animation: ${Animation} 0.5s backwards;
    background-color: ${Colors.white};
    padding: ${Spacing};
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: ${Spacing};
`;

export const StyledColumn = styled.div`
    display: flex;
    justify-content: center;
`;

export const StyledButton = styled.button`
    ${centerFlex}

    border: 0;
    outline: none;

    padding: 0.5rem;

    background-color: ${Colors.blue};
    border-radius: ${borderRadius};
    color: ${Colors.white};
    font-size: ${FontSize.large};
    cursor: pointer;

    margin-top: 0.5rem;

    &:active {
        transform: scale(0.9);
    }
`;

export const StyledBuyCoins2 = styled(BuyCoins2)`
    ${centerFlex}
`;

export const StyledBuyCoins3 = styled(BuyCoins3)`
    ${centerFlex}
`;

export const StyledBuyCoins4 = styled(BuyCoins4)`
    ${centerFlex}
`;

export const StyledCloseButton = styled.button`
    display: flex;
    margin-left: auto;
    padding: 0.5rem;
    background: transparent;
    margin-bottom: -30px;

    border: 0;
    outline: none;
    cursor: pointer;
`;
