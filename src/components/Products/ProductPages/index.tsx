import { TProductPages } from "./types";
import { Text } from "../../Text";
import { StyledButtonContainer, StyledButton, StyledVerticalBar } from "./styles";
import { ArrowLeft, ArrowRight } from "../../Icons";
import { StyledInfoPages } from "./styles";
import ProductContext from "../../../context/Product/ProductContext";
import { IProductState } from "../../../context/types";
import { useContext, useEffect, useState } from "react";
import { PRODUCT_PER_PAGE, INITIAL_PAGE } from "./constants";

const ProductPages: React.FC<TProductPages> = ({ children, VerticalBar }: TProductPages): JSX.Element => {
    const { allProducts, SetCurrentProducts, currentSort } = useContext<IProductState>(ProductContext);

    const [currentPage, setCurrentPage] = useState(INITIAL_PAGE);
    const [CanLeft, setCanLeft] = useState(false);
    const [CanRight, setCanRight] = useState(false);

    const indexOfLastProduct = currentPage * PRODUCT_PER_PAGE;
    const indexOfFirstProduct = indexOfLastProduct - PRODUCT_PER_PAGE;

    const ProductListLenght = allProducts.length;
    const LimitOfPage = ProductListLenght / PRODUCT_PER_PAGE;

    useEffect(() => {
        const ProductSlices = allProducts.slice(indexOfFirstProduct, indexOfLastProduct);
        SetCurrentProducts && SetCurrentProducts(ProductSlices);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [allProducts, currentPage, currentSort]);

    useEffect(() => {
        setCurrentPage(INITIAL_PAGE);
    }, [currentSort]);

    useEffect(() => {
        if (currentPage === INITIAL_PAGE || currentPage < INITIAL_PAGE) {
            setCanLeft(false);
            setCanRight(true);
        }
        if (currentPage === LimitOfPage || currentPage > LimitOfPage) {
            setCanRight(false);
            setCanLeft(true);
        }
    }, [currentPage, LimitOfPage]);

    return (
        <StyledInfoPages>
            <Text>{`${indexOfLastProduct} of ${ProductListLenght}`}</Text>
            {VerticalBar && <StyledVerticalBar />}
            {children}
            <StyledButtonContainer>
                {CanLeft && (
                    <StyledButton onClick={(): void => setCurrentPage(currentPage - 1)}>
                        <ArrowLeft />
                    </StyledButton>
                )}
                {CanRight && (
                    <StyledButton onClick={(): void => setCurrentPage(currentPage + 1)}>
                        <ArrowRight />
                    </StyledButton>
                )}
            </StyledButtonContainer>
        </StyledInfoPages>
    );
};

export default ProductPages;
