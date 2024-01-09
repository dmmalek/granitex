import Header from "@/component/global/Header";
import Featured from "@/component/global/Featured";
import About from "@/component/About/About";
import Cta from "@/component/Home/Cta";
import Footer from "@/component/global/Footer";
import Reviews from "@/component/Home/Reviews";

const index = () => {
  return (
    <>
      <Header />
      <Featured title="About" />
      <About />
      <Cta />
      <Reviews />
      <Footer />
    </>
  );
};

export default index;
