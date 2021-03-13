import styled from "styled-components";
import { Colors, Spacing } from "../../../common/styles";
import { StyledList } from "../styles";

export const StyledButtonContainer = styled.ul`
    display: flex;
    gap: 12px;
    margin-left: auto;
`;

export const StyledButton = styled.button`
    outline: 0;
    border: 0;
    background: 0;
    cursor: pointer;
`;

export const StyledVerticalBar = styled.div`
    border-left: 1px solid ${Colors.lightSlateGray};
    height: 49px;
`;

export const StyledInfoPages = styled(StyledList)`
    border-bottom: 1px solid ${Colors.lightSlateGray};
    padding-bottom: ${Spacing};
`;
