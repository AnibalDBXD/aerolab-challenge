import styled from "styled-components";
import { Colors, FontSize, LetterSpacing, lineHeight } from "../../common/styles";

export const Text = styled.p`
    font-size: ${FontSize.large};
    color: ${Colors.darkGray};
    letter-spacing: ${LetterSpacing.normal};
    line-height: ${lineHeight};
`;
