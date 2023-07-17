import './App.css';
import Header from './components/Header/header';
import Headline from './components/HeroHeadline/hero';
import OurClients from './components/OurClient/ourclient';
import Since from './components/Since/since';
import Happyclient from './components/HappyClient/happyclient';
import Footer from './components/Footer/footer';

function App() {
  return (
    <>
      <Header />
      <Headline />
      <OurClients />
      <Since />
      <Happyclient />
      <Footer />
    </>
  );
}

export default App;
