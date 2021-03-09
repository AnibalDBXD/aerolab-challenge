import styled from "styled-components";
import { Colors, borderRadius, FontSize, lineHeight, LetterSpacing } from "../../../common/styles";
import { Text } from "../../Text";

export const StyledText = styled(Text)`
    color: ${Colors.slateGray};
`;

export const StyledButton = styled.button`
    color: ${(props): string => (props.className === "active" ? Colors.white : Colors.slateGray)};
    background-color: ${(props): string => (props.className === "active" ? Colors.blue : Colors.gray)};
    border-radius: ${borderRadius};
    border: 0;
    min-width: max-content;
    font-size: ${FontSize.large};
    letter-spacing: ${LetterSpacing.normal};
    line-height: ${lineHeight};
    padding-left: 24px;
    padding-right: 24px;
    outline: 0;
    cursor: pointer;
`;
