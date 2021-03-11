import { ICoins } from "./types";
import { StyledCoins, StyledPopup } from "./styles";
import { BuyCoins } from "../../../Icons";
import AddCoins from "./AddCoins";

const Coins: React.FC<ICoins> = ({ children }: ICoins): JSX.Element => {
    return (
        <StyledPopup
            closeOnDocumentClick
            closeOnEscape
            modal
            trigger={
                <StyledCoins>
                    {children} <BuyCoins size="24px" />
                </StyledCoins>
            }>
            {(close: () => void): JSX.Element => <AddCoins closeModal={close} />}
        </StyledPopup>
    );
};

export default Coins;
