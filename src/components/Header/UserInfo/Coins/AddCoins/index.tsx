import { StyledBuyCoinsContainer, StyledColumn, StyledButton, StyledCloseButton } from "./styles";
import { BuyCoins2, BuyCoins3, BuyCoins4 } from "../../../../Icons";
import { IAddCoins, IPoints } from "./types";
import { PostPoints } from "../../../../../api";
import { useUserContext } from "../../../../../context/User/UserContext";
import { AcceptablePoints } from "../../../../../api/types";

const AddCoins: React.FC<IAddCoins> = ({ closeModal }: IAddCoins): JSX.Element => {
    const { SetPoints, points } = useUserContext();

    const PointsCanBuy: IPoints[] = [
        { Icon: BuyCoins2, points: 1000, id: "1" },
        { Icon: BuyCoins3, points: 5000, id: "2" },
        { Icon: BuyCoins4, points: 7500, id: "3" }
    ];

    const BuyPoints = (cost: AcceptablePoints): void => {
        PostPoints(cost)
            .then(() => SetPoints && SetPoints(points + cost))
            .then(() => alert("Buy Succesfully"));
    };

    return (
        <>
            <StyledCloseButton onClick={closeModal}>X</StyledCloseButton>
            <StyledBuyCoinsContainer>
                {PointsCanBuy.map(({ Icon, points, id }) => (
                    <StyledColumn key={id}>
                        <div>
                            <Icon size={"140px"} />
                            <StyledButton onClick={(): void => BuyPoints(points)}>{points}</StyledButton>
                        </div>
                    </StyledColumn>
                ))}
            </StyledBuyCoinsContainer>
        </>
    );
};

export default AddCoins;
