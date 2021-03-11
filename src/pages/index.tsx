import Header from "../components/Header";
import Cover from "../components/Cover";
import Products from "../components/Products";
import UserProvider from "../context/User/UserProvider";

const Home: React.FC = (): JSX.Element => {
    return (
        <UserProvider>
            <Header coin={6000} name="John Kite" />
            <Cover>Electronics</Cover>
            <Products />
        </UserProvider>
    );
};

export default Home;
