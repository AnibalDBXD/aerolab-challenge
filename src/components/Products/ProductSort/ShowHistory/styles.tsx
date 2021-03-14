import styled from "styled-components";
import { History } from "../../../Icons";
import { Colors } from "../../../../common/styles";

export const StyledHistory = styled(History)`
    fill: ${(props): string => (props.className === "active" ? Colors.orange : Colors.darkGray)};
    cursor: pointer;
`;

export const StyledButton = styled.button`
    background: none;
    border: none;
    outline: none;
`;
