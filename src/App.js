//lazy loading
import CountdownTimer from "./components/CountdownTimer";
import { lazy, Suspense } from "react";
import Rules from "./components/rules";
const Header = lazy(() => import("./components/Header"));
const HeroSection = lazy(() => import("./components/HeroSection"));
const About = lazy(() => import("./components/About"));
const StaticCard = lazy(() => import("./components/StaticCard"));
const Perk_Prize = lazy(() => import("./components/perk_prize"));
const FullWidthTabs = lazy(() => import("./components/TabPannel"));
const Event = lazy(() => import("./components/pastEvent"));
const Sponsers = lazy(() => import("./components/Sponsers"));
const FAQs = lazy(() => import("./components/FAQs"));
const Footer = lazy(() => import("./components/Footer"));
const ThemeComponent = lazy(() => import("./components/ThemeComponent"));

function App() {
  return (
    <div
      style={{
        overflow: "hidden",
      }}
    >
      <Header />
      <HeroSection />
      <CountdownTimer />
      <About />
      <StaticCard />
      <Perk_Prize />
      <Rules />
      <FullWidthTabs />
      <ThemeComponent />
      <Event />
      <Sponsers />
      <FAQs />
      <Footer />
    </div>
  );
}

export default App;
