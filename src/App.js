import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import { ParallaxProvider } from 'react-scroll-parallax';
import MainBanner from './components/mainBanner';
import ClientsSection from './components/clientSection';
import WolvesSection from './components/wolvesSection';
import SwipeComponent from './components/SwipeComponent';
function App() {
  return (
    <ParallaxProvider>
    <Header />
    <MainBanner />
    <SwipeComponent/>
    <ClientsSection />
    <WolvesSection />
    <Footer />
    </ParallaxProvider>
  );
}

export default App;
