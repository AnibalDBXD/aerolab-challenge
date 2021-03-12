import { StyledHeader } from "./styles";
import { AerolabLogo } from "../Icons";
import UserInfo from "./UserInfo";

const Header: React.FC = (): JSX.Element => (
    <StyledHeader>
        <a href="https://github.com/AnibalDBXD/aerolab-challenge" rel="noreferrer" target="_blank">
            <AerolabLogo />
        </a>
        <UserInfo />
    </StyledHeader>
);

export default Header;
