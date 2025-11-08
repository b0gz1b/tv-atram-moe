import "./App.css";
import Navbar from "@/components/common/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection.jsx";
import StatisticsSection from "@/components/sections/StatisticsSection";
function App() {
  return (
    <>
      <div>
        <Navbar />
        <HeroSection />
        <ServicesSection />
        <StatisticsSection />
      </div>
    </>
  );
}

export default App;
