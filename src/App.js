//lazy loadingh
import CountdownTimer from "./components/CountdownTimer";
import { lazy, Suspense } from "react";
import Rules from "./components/rules";
const Header = lazy(() => import("./components/Header"));
const HeroSection = lazy(() => import("./components/HeroSection"));
const About = lazy(() => import("./components/About"));
const StaticCard = lazy(() => import("./components/StaticCard"));
const PrizeLayout = lazy(() => import("./components/PrizeLayout"));
const FullWidthTabs = lazy(() => import("./components/TabPannel"));
const Cards = lazy(() => import("./components/cards"));
const Themeportion = lazy(() => import("./components/Themeportion"));
const Event = lazy(() => import("./components/pastEvent"));
const Sponsers = lazy(() => import("./components/Sponsers"));
const FAQs = lazy(() => import("./components/FAQs"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
  return (
    <div
      style={{
        overflowX: "hidden",
      }}
    >
      <Header />
      <HeroSection />
      <CountdownTimer />
      <About />
      <StaticCard />
      <PrizeLayout />
      <Rules />
      <FullWidthTabs />
      {/* <Cards /> */}
      <Themeportion />
      <Event />
      <Sponsers />
      <FAQs />
      <Footer />
    </div>
  );
}

export default App;
