import { StyledHistory, StyledButton } from "./styles";
import { useProductContext } from "../../../../context/Product/ProductContext";
import { GetRedeemHistory } from "../../../../api";
import { IHistoryProducts } from "../../../../interfaces";

const ShowHistory: React.FC = (): JSX.Element => {
    const { setHistory, setHistoryActive, SetLoading, historyActive } = useProductContext();

    const handleClick = (): void => {
        if (historyActive) {
            setHistoryActive && setHistoryActive(false);
            return;
        }
        SetLoading && SetLoading(true);

        setHistoryActive && setHistoryActive(true);

        GetRedeemHistory()
            .then((history) => {
                if (history) {
                    setHistory && setHistory(history as IHistoryProducts[]);
                }
            })
            .then(() => SetLoading && SetLoading(false));
    };

    return (
        <StyledButton onClick={handleClick}>
            <StyledHistory className={`${historyActive && "active"}`} height="34px" width="34px" />
        </StyledButton>
    );
};

export default ShowHistory;
