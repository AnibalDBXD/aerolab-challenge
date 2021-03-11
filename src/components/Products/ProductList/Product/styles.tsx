import styled, { css } from "styled-components";
import { Colors, FontSize, LetterSpacing } from "../../../../common/styles";
import { BuyBlue } from "../../../Icons";

export const StyledProductContainer = styled.div`
    background-color: ${Colors.white};
    padding: 12px;
    box-shadow: 5px 8px 11px -2px rgba(0, 0, 0, 0.17);
    width: 276px;
    height: 276px;
    position: relative;
`;

export const StyledPicture = styled.picture`
    border-bottom: 1px solid ${Colors.lightslateGray};
    display: flex;
    justify-content: center;
    position: relative;
`;

export const StyledTextContainer = styled.div`
    margin-top: 10%;
`;

export const StyledProductCategory = styled.p`
    color: ${Colors.slateGray};
    font-size: ${FontSize.small};
    letter-spacing: ${LetterSpacing.short};
`;

export const StyledProductName = styled.h3`
    color: ${Colors.darkGray};
    font-size: ${FontSize.medium};
    letter-spacing: ${LetterSpacing.short};
`;

export const RightTop = css`
    position: absolute;
    z-index: 1;
    right: 0;
    top: 0;
`;

export const StyledBuyIcon = styled(BuyBlue)`
    ${RightTop};
`;
