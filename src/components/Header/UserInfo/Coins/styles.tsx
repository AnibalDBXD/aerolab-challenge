import styled from "styled-components";
import { Colors, borderRadius } from "../../../../common/styles";
import { Text } from "../../../Text";

export const StyledCoins = styled(Text)`
    background-color: ${Colors.gray};
    display: flex;
    align-items: center;
    gap: 4px;
    padding-left: 12px;
    padding-right: 6px;
    padding-top: 5px;
    padding-bottom: 5px;
    border-radius: ${borderRadius};
    line-height: 0;
    cursor: pointer;
`;
