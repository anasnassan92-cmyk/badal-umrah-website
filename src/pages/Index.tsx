import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import CompareTable from "@/components/CompareTable";
import HowToBook from "@/components/HowToBook";
import IslamicRulings from "@/components/IslamicRulings";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <CompareTable />
      <HowToBook />
      <IslamicRulings />
      <Footer />
    </div>
  );
};

export default Index;
