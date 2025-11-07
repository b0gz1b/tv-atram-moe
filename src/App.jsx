import './App.css'
import Navbar from './components/common/Navbar';
import HeroSection from './components/sections/HeroSection';
import ServicesSection from './components/sections/ServicesSection.jsx';

function App() {

  return (
    <>
      <div>
        <Navbar/>
        <HeroSection/>
        <ServicesSection/>
      </div>
    </>
  )
}

export default App
