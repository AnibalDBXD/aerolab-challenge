import Coins from "./Coins";
import { StyledContainer } from "./styles";
import { Text } from "../Text";
import { TUserinfo } from "./types";

const Userinfo: React.FC<TUserinfo> = ({ name, coin }: TUserinfo): JSX.Element => {
    return (
        <StyledContainer>
            <Text>{name}</Text>
            <Coins>{coin}</Coins>
        </StyledContainer>
    );
};

export default Userinfo;
