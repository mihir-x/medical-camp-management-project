import { Helmet } from "react-helmet-async";
import Banner from "../../Components/Banner/Banner";
import PopularCamps from "../../Components/PopularCamps/PopularCamps";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>MediVoyage | Home</title>
            </Helmet>
            <Banner></Banner>
            <PopularCamps></PopularCamps>
        </div>
    );
};

export default Home;