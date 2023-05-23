import Gallery from "../Gallery/Gallery";
import ShopByCategory from "../ShopByCategory/ShopByCategory";
import Banner from "../Banner/Banner";
import useTitle from "../../hooks/useTitle";
import CustomerReview from "../../CustomerReview/CustomerReview";
import FAQSection from "../../FAQSection/FAQSection";



const Home = () => {

    useTitle('ToyCrateX - Home')

    return (
        <>
            <Banner></Banner>
            <ShopByCategory></ShopByCategory>
            <Gallery></Gallery>
            <CustomerReview></CustomerReview>
            <FAQSection></FAQSection>
        </>
    );
};

export default Home;