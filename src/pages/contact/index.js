import Featured from "@/component/global/Featured";
import Header from "@/component/global/Header";
import ContactUs from "@/component/Contact/ContactUs";
import Footer from "@/component/global/Footer";

const index = () => {
  return (
    <>
      <Header />
      <Featured title="Contact" />
      <ContactUs />
      <Footer />
    </>
  );
};

export default index;
