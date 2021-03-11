import { StyledProductContainer, StyledPicture, StyledProductCategory, StyledProductName, StyledTextContainer, StyledBuyIcon } from "./styles";
import Image from "next/image";
import NotEnoughtMoney from "./NotEnoughtMoney";
import BuyScreen from "./BuyScreen";
import { IComponentProduct } from "./types";
import { useUserContext } from "../../../../context/User/UserContext";
import { Redeem } from "../../../../api";

const Product: React.FC<IComponentProduct> = ({ category, cost, img_src = "", name, _id }: IComponentProduct): JSX.Element => {
    const { points, SetPoints } = useUserContext();

    const LacksMoney = cost > points;
    const EnoughtMoney = cost - points;

    const handleRedeem = (): void => {
        Redeem(_id).then(() => {
            SetPoints && SetPoints(points - cost);
            alert(`${name} redeem successfully`);
        });
    };

    return (
        <StyledProductContainer>
            {!LacksMoney && <BuyScreen handleRedeem={handleRedeem} price={cost} />}
            <StyledPicture>
                {LacksMoney ? <NotEnoughtMoney money={EnoughtMoney} /> : <StyledBuyIcon />}
                <Image height={182} src={img_src} width={252} />
            </StyledPicture>
            <StyledTextContainer>
                <StyledProductCategory>{category}</StyledProductCategory>
                <StyledProductName>{name}</StyledProductName>
            </StyledTextContainer>
        </StyledProductContainer>
    );
};

export default Product;
