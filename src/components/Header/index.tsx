import { StyledHeader } from "./styles";
import { AerolabLogo } from "../Icons";
import UserInfo from "../UserInfo";
import { THeader } from "./types";

const Header: React.FC<THeader> = ({ name, coin }: THeader): JSX.Element => {
    return (
        <StyledHeader>
            <AerolabLogo />
            <UserInfo coin={coin} name={name} />
        </StyledHeader>
    );
};

export default Header;
