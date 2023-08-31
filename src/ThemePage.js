import {lazy} from "react";

const Header = lazy(() => import("./components/Header"));
const Footer = lazy(() => import("./components/Footer"));
const ProbStaTable = lazy(() => import("./components/ProbStaTable"));




function ThemePage() {
  return (
    <div
      style={{
        overflowX: "hidden",
      }}
    >
      <Header />
     
      <ProbStaTable/> 


      <Footer />
    </div>
  );
}

export default ThemePage;