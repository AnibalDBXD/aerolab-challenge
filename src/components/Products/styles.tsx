import styled from "styled-components";
import { Colors, Spacing } from "../../common/styles";

export const StyledProductsContainer = styled.main`
    background-color: ${Colors.lightGray};
    padding-top: 65px;
    padding-bottom: 73px;
    padding-left: 10vw;
    padding-right: 10vw;
`;

export const StyledList = styled.ul`
    display: flex;
    gap: ${Spacing};
    align-items: center;
    flex-wrap: wrap;
`;
