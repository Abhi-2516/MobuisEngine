import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import WorkSection from "./Components/WorkSection";
import About from "./Components/About";
import ClientSection from "./Components/ClientSection";
import ChooseUs from "./Components/Chooseus";
import Plans from "./Components/Plans";
import Resume from "./Components/Resume";
import Footer from "./Components/footer";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <WorkSection />
      <About/>
      <ClientSection/>
      <ChooseUs/>
      <Plans/>
      <Resume/>
      <Footer/>
    </>
  );
}

export default App;
