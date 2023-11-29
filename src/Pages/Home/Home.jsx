import { Helmet } from "react-helmet-async";
import Banner from "../../Components/Banner/Banner";
import PopularCamps from "../../Components/PopularCamps/PopularCamps";
import Testimonials from "../../Components/Testimonials/Testimonials";
import UpcomingSection from "../../Components/Upcoming/UpcomingSection";
import Faq from "../../Components/Faq/Faq";
import TopOrganizer from "../../Components/TopOrganizer/TopOrganizer";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>MediVoyage | Home</title>
            </Helmet>
            <Banner></Banner>
            <PopularCamps></PopularCamps>
            <Testimonials></Testimonials>
            <UpcomingSection></UpcomingSection>
            <TopOrganizer></TopOrganizer>
            <Faq></Faq>
        </div>
    );
};

export default Home;