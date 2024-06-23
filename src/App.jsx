import "./App.css";
import Nav from "./Components/FirstPage/Nav";
import Hero1 from "./Components/FirstPage/Hero1";
import BottomNav from "./Components/FirstPage/BottomNav";
import Circle from "./Components/FeaturePage/Circle";
import BusinessPage from "./Components/BusinessPage/BusinessPage";
import CoinsPlans from "./Components/ECommercePage/CoinsPlans";
import Portfolio from "./Components/Portfolio/Portfolio";
import Client from "./Components/RealClientTestimonials/Client";

function App() {
  return (
    <>
      <Nav />
      <BottomNav />
      <Hero1 />
      <BusinessPage />
      <CoinsPlans />
      <Portfolio />
      
      
    </>
  );
}

export default App;
