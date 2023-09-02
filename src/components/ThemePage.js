import { lazy } from "react";

const Header = lazy(() => import("./Header"));
const Footer = lazy(() => import("./Footer"));
const ProbStaTable = lazy(() => import("./ProbStaTable"));

function ThemePage() {
  return (
    <div
      style={{
        overflowX: "hidden",
      }}
    >
      <Header />
      <ProbStaTable />
      <Footer />
    </div>
  );
}

export default ThemePage;
