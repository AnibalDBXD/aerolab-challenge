import styled from "styled-components";
import { Colors } from "../../../../../common/styles";

export const StyledContainer = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const StyledBuyCoinsContainer = styled.div`
    width: 60vw;
    height: 40vh;
    background-color: ${Colors.white};
`;

export const InvisibleContainer = styled.div`
    display: none;
`;
