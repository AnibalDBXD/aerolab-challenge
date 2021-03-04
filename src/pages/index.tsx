import Header from "../components/Header";
import Cover from "../components/Cover";
import Products from "../components/Products";
import { GetServerSideProps } from "next";
import { GetProductList } from "../api";
import { IProduct } from "../interfaces";

export const getServerSideProps: GetServerSideProps = async () => {
    const ProductList: IProduct[] | undefined = await GetProductList();
    return {
        props: { ProductList }
    };
};

interface IHome {
    ProductList: IProduct[] | undefined;
}

const Home: React.FC<IHome> = ({ ProductList }: IHome): JSX.Element => {
    return (
        <>
            <Header coin={6000} name="John Kite" />
            <Cover>Electronics</Cover>
            <Products productList={ProductList ? ProductList : []} />
        </>
    );
};

export default Home;
