import { TCoins } from "./types";
import { StyledCoins } from "./styles";
import { Coin } from "../../Icons";

const Coins: React.FC<TCoins> = ({ children }: TCoins): JSX.Element => {
    return (
        <StyledCoins>
            {children} <Coin style={{ marginTop: "3px" }} />
        </StyledCoins>
    );
};

export default Coins;
