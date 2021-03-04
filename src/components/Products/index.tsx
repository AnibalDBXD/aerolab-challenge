import { StyledProductsContainer } from "./styles";
import ProductPages from "./ProductPages";
import ProductFilter from "./ProductFilter";
import ProductList from "./ProductList";
import { IProducts } from "./types";
import { useEffect, useState } from "react";

const Products: React.FC<IProducts> = ({ productList }: IProducts): JSX.Element => {
    // ProductPage logic
    const PRODUCT_PER_PAGE = 16;
    const INITIAL_PAGE = 1;
    const ProductListLenght = productList.length;
    const LimitOfPage = ProductListLenght / PRODUCT_PER_PAGE;

    const [currentPage, setCurrentPage] = useState(INITIAL_PAGE);

    const indexOfLastProduct = currentPage * PRODUCT_PER_PAGE;
    const indexOfFirstProduct = indexOfLastProduct - PRODUCT_PER_PAGE;

    const ProductSlices = productList.slice(indexOfFirstProduct, indexOfLastProduct);
    const [CurrentProducts, SetCurrentProducts] = useState(ProductSlices);

    const ChangePages = {
        right: (): void => {
            setCurrentPage(currentPage + 1);
        },
        left: (): void => {
            setCurrentPage(currentPage - 1);
        }
    };

    const [CanLeft, setCanLeft] = useState(false);
    const [CanRight, setCanRight] = useState(false);

    useEffect(() => {
        if (currentPage === INITIAL_PAGE || currentPage < INITIAL_PAGE) {
            setCanLeft(false);
            setCanRight(true);
        }
        if (currentPage === LimitOfPage || currentPage > LimitOfPage) {
            setCanRight(false);
            setCanLeft(true);
        }
    }, [currentPage, INITIAL_PAGE, LimitOfPage]);

    useEffect(() => {
        SetCurrentProducts(ProductSlices);
    }, [indexOfFirstProduct, indexOfLastProduct, productList]);

    return (
        <StyledProductsContainer>
            <ProductPages CanLeft={CanLeft} CanRight={CanRight} NumberOfProducts={`${indexOfLastProduct} of ${ProductListLenght}`} VerticalBar changePages={ChangePages}>
                <ProductFilter HandleHighestPrice={HandleHighestPrice} HandleLowestPrice={HandleLowestPrice} HandleMostRecent={HandleMostRecent} />
            </ProductPages>
            <ProductList productList={CurrentProducts} />
            <ProductPages CanLeft={CanLeft} CanRight={CanRight} NumberOfProducts={`${indexOfLastProduct} of ${ProductListLenght}`} changePages={ChangePages} />
        </StyledProductsContainer>
    );
};

export default Products;
