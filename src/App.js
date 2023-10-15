import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import { ParallaxProvider } from 'react-scroll-parallax';
import ParallaxSection from './components/ParallaxSection';
import MainBanner from './components/mainBanner';
import ClientsSection from './components/clientSection';
import WolvesSection from './components/wolvesSection';
import AnimationDesign from './components/AnimateDesign';
function App() {
  return (
    <ParallaxProvider>
    <Header />
    <MainBanner />
    {/* <ParallaxSection /> */}
    <AnimationDesign />
    <ClientsSection />
    <WolvesSection />
    <Footer />
    </ParallaxProvider>
  );
}

export default App;
