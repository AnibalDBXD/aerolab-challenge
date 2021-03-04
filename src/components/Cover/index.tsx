import { StyledCover, StyledTitle } from "./styles";
import { ICover } from "./types";

const Cover: React.FC<ICover> = ({ children }: ICover): JSX.Element => {
    return (
        <StyledCover>
            <StyledTitle>{children}</StyledTitle>
        </StyledCover>
    );
};

export default Cover;
