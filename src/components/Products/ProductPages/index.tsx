import { IProductPages } from "./types";
import { Text } from "../../Text";
import { StyledButtonContainer, StyledButton, StyledVerticalBar } from "./styles";
import { ArrowLeft, ArrowRight } from "../../Icons";
import { StyledInfoPages } from "./styles";
import { useProductContext } from "../../../context/Product/ProductContext";
import { useEffect, useState } from "react";
import { PRODUCT_PER_PAGE, INITIAL_PAGE } from "./constants";
import PagesLoader from "./PagesLoader";

const ProductPages: React.FC<IProductPages> = ({ children, VerticalBar }: IProductPages): JSX.Element => {
    const { allProducts, SetCurrentProducts, currentSort, history, historyActive, loading } = useProductContext();

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
            {loading ? (
                <PagesLoader />
            ) : (
                <>
                    {historyActive ? (
                        <>
                            <Text>{`${history.length} total products`}</Text>
                            {VerticalBar && <StyledVerticalBar />}
                            {children}
                        </>
                    ) : (
                        <>
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
                        </>
                    )}
                </>
            )}
        </StyledInfoPages>
    );
};

export default ProductPages;
