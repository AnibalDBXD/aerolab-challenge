import { StyledNotEnoughMoney } from "./styles";
import { Coin } from "../../../Icons";
import { TNotEnoughMoney } from "./types";

const NotEnoughMoney: React.FC<TNotEnoughMoney> = ({ money }: TNotEnoughMoney): JSX.Element => (
    <StyledNotEnoughMoney>
        You need {money} <Coin size="20px" />
    </StyledNotEnoughMoney>
);

export default NotEnoughMoney;
