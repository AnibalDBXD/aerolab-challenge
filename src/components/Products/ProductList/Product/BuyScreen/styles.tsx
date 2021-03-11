import styled from "styled-components";
import { Colors, FontSize, LetterSpacing, borderRadius } from "../../../../../common/styles";
import { BuyWhite } from "../../../../Icons";
import { RightTop } from "../styles";
import { StyledProductContainer } from "../styles";

export const StyledBuyScreen = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 2;
    background-color: ${Colors.TransparentBlue};

    display: flex;
    justify-content: center;
    align-items: center;
    padding: 24px;
    visibility: hidden;
    opacity: 0;
    transition: visibility 0s, opacity 0.2s linear;

    ${StyledProductContainer}:hover & {
        visibility: visible;
        opacity: 1;
    }
`;

export const StyledContainer = styled.div`
    gap: 12px;
    width: 100%;
`;

export const StyledPrice = styled.h1`
    font-size: ${FontSize.larger};
    color: ${Colors.white};
    gap: 9px;
    display: flex;
    align-items: center;
    font-weight: normal;
    display: flex;
    justify-content: center;
`;

export const StyledButtonPrice = styled.button`
    width: 100%;
    padding-top: 8px;
    padding-bottom: 8px;
    background-color: ${Colors.white};
    color: ${Colors.darkGray};
    letter-spacing: ${LetterSpacing.short};
    outline: none;
    border: 0;
    border-radius: ${borderRadius};
    font-size: ${FontSize.medium};
    cursor: pointer;
`;

export const StyledBuyIcon = styled(BuyWhite)`
    ${RightTop};
    margin-top: 10px;
    margin-right: 6px;
`;
