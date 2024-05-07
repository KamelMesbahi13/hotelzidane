import Introduction from "./Introduction/Introduction";
import AboutUs from "./AboutUs/AboutUs";
import Mission from "./Misson/Mission";
import Apartments from "./Apartments/Apartments";
import ContactUsSection from "./ContactUsSection/ContactUsSection";
import Footer from "../../Ui/TranslationIcon/Footer/Footer";

const Home = () => {
  return (
    <>
      <Introduction />
      <div className="container">
        <AboutUs />
        <Mission />
        <Apartments />
      </div>
      <ContactUsSection />
      <Footer />
    </>
  );
};

export default Home;
