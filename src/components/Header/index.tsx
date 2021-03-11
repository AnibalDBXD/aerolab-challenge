import { StyledHeader } from "./styles";
import { AerolabLogo } from "../Icons";
import UserInfo from "./UserInfo";

const Header: React.FC = (): JSX.Element => (
    <StyledHeader>
        <AerolabLogo />
        <UserInfo />
    </StyledHeader>
);

export default Header;
