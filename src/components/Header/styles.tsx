import styled from "styled-components";
import { Colors } from "../../common/styles";

export const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-right: 42px;
    padding-left: 42px;
    background-color: ${Colors.white};

    position: fixed;
    right: 0;
    left: 0;
    z-index: 999;
`;
