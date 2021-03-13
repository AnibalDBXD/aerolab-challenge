import styled from "styled-components";
import { Colors, FontSize } from "../../common/styles";

export const StyledCover = styled.div`
    background-image: url(/assets/img/cover.png);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    min-height: 412px;

    display: flex;
    align-items: flex-end;
`;

export const StyledTitle = styled.div`
    font-size: ${FontSize.xxLarger};
    color: ${Colors.white};
    font-weight: bold;
    margin-left: 10vw;
    margin-bottom: 49px;
`;
