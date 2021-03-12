import Coins from "./Coins";
import { StyledContainer } from "./styles";
import { Text } from "../../Text";
import { useUserContext } from "../../../context/User/UserContext";
import UserInfoLoader from "./UserInfoLoader";

const Userinfo: React.FC = (): JSX.Element => {
    const { points, name, loading } = useUserContext();
    return (
        <>
            {loading ? (
                <UserInfoLoader />
            ) : (
                <StyledContainer>
                    <Text>{name}</Text>
                    <Coins>{points}</Coins>
                </StyledContainer>
            )}
        </>
    );
};

export default Userinfo;
