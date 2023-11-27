import { Helmet } from "react-helmet-async";
import Banner from "../../Components/Banner/Banner";
import PopularCamps from "../../Components/PopularCamps/PopularCamps";
import Testimonials from "../../Components/Testimonials/Testimonials";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>MediVoyage | Home</title>
            </Helmet>
            <Banner></Banner>
            <PopularCamps></PopularCamps>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;