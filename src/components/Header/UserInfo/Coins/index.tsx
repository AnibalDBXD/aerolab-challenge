import { ICoins } from "./types";
import { StyledCoins } from "./styles";
import { BuyCoins } from "../../../Icons";
import AddCoins from "./AddCoins";

const Coins: React.FC<ICoins> = ({ children }: ICoins): JSX.Element => {
    return (
        <>
            <AddCoins />
            <StyledCoins>
                {children} <BuyCoins size="24px" />
            </StyledCoins>
        </>
    );
};

export default Coins;
