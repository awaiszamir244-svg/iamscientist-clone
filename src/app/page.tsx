import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import Announcements from "./components/Announcements";
import CtaBanner from "./components/CtaBanner";
import Courses from "./components/Courses";
import MagicTools from "./components/MagicTools";
import CountryPartners from "./components/CountryPartners";
import Prizes from "./components/Prizes";
import MeritAwards from "./components/MeritAwards";
import Carousel from "./components/Carousel";
import Faq from "./components/Faq";
import Gallery from "./components/Gallery";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrustBar />
      <Announcements />
      <CtaBanner />
      <Courses />
      <MagicTools />
      <CountryPartners />
      <Prizes />
      <MeritAwards />
      <Carousel />
      <Faq />
      <Gallery />
      <Newsletter />
      <Footer />
    </main>
  );
}