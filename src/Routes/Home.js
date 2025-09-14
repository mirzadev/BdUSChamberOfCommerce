import Navbar from "../Components/NavbarItems/Navbar";
import HomeItems from "../Components/HomePage/HomeItems";
import Footer from "../Components/FooterItems/Footer";
import Carousel from "../Components/Carousel/CarouselFunc";
function Home() {
  return (
    <>
      <Navbar />
      <Carousel />
      <HomeItems />
      <Footer />
    </>
  );
}

export default Home;
