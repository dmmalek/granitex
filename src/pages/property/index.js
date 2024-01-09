import Header from "@/component/global/Header";
// import Featured from "@/component/global/Featured"
// import Rooms from "@/component/Home/Rooms";
// import Cta from "@/component/Home/Cta";
import Footer from "@/component/global/Footer";
import Property from "@/component/Property/Property";
const index = () => {
  return (
    <>
      <Header />
      {/* <Featured title="Property" /> */}
      {/* <Rooms /> */}
      {/* <Cta /> */}
      <Property />
      <Footer />
    </>
  );
};

export default index;
