import styled from "styled-components";
import { RightTop } from "../styles";
import { Colors, FontSize, LetterSpacing, borderRadius } from "../../../../../common/styles";

export const StyledNotEnoughMoney = styled.p`
    ${RightTop};
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 15px;
    padding-right: 15px;

    display: flex;
    display: flex;
    align-items: center;
    gap: 10px;

    color: ${Colors.white};
    font-size: ${FontSize.smaller};
    letter-spacing: ${LetterSpacing.short};

    background-color: ${Colors.TransparentdarkGray};
    border-radius: ${borderRadius};
`;
