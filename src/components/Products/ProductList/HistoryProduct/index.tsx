import { IComponentHistoryProducts } from "./types";
import { StyledProductContainer, StyledPicture, StyledTextContainer, StyledProductCategory, StyledProductName } from "../Product/styles";
import { StyledPurchasedAmount, StyledCost, StyledTimeAgo } from "./styles";
import { Coin } from "../../../Icons";
import Image from "next/image";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

const HistoryProduct: React.FC<IComponentHistoryProducts> = ({ name, category, cost, createDate, img_src = "", PurchasedAmount }: IComponentHistoryProducts): JSX.Element => {
    dayjs.extend(relativeTime);
    const timeAgo = dayjs().to(dayjs(createDate));
    return (
        <StyledProductContainer>
            <StyledPicture>
                <StyledPurchasedAmount>You have {PurchasedAmount}</StyledPurchasedAmount>
                <StyledCost>
                    {cost} <Coin size="20px" />
                </StyledCost>
                <Image height={182} src={img_src} width={252} />
            </StyledPicture>
            <StyledTextContainer>
                <StyledProductCategory>{category}</StyledProductCategory>
                <StyledProductName>{name}</StyledProductName>
                <StyledTimeAgo>{timeAgo}</StyledTimeAgo>
            </StyledTextContainer>
        </StyledProductContainer>
    );
};

export default HistoryProduct;
