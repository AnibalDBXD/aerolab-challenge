import Header from "../components/Header";
import Cover from "../components/Cover";
import Products from "../components/Products";

const Home: React.FC = (): JSX.Element => {
    return (
        <>
            <Header coin={6000} name="John Kite" />
            <Cover>Electronics</Cover>
            <Products />
        </>
    );
};

export default Home;
