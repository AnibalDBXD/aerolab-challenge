import { StyledProductContainer, StyledPicture, StyledProductCategory, StyledProductName, StyledTextContainer, StyledBuyIcon } from "./styles";
import Image from "next/image";
import NotEnoughtMoney from "./NotEnoughtMoney";
import BuyScreen from "./BuyScreen";
import { IComponentProduct } from "./types";

const Product: React.FC<IComponentProduct> = ({ category, cost, img_src = "", name }: IComponentProduct): JSX.Element => {
    const faltaDinero = true;
    return (
        <StyledProductContainer>
            {faltaDinero && <BuyScreen price={cost} />}
            <StyledPicture>
                {faltaDinero ? <StyledBuyIcon /> : <NotEnoughtMoney money={400} />}
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
