import Coins from "./Coins";
import { StyledContainer } from "./styles";
import { Text } from "../../Text";
import { useUserContext } from "../../../context/User/UserContext";

const Userinfo: React.FC = (): JSX.Element => {
    const { points, name } = useUserContext();
    return (
        <StyledContainer>
            <Text>{name}</Text>
            <Coins>{points}</Coins>
        </StyledContainer>
    );
};

export default Userinfo;
