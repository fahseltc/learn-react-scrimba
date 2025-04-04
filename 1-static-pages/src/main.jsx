import { createRoot } from "react-dom/client";
import Header from "./Header";
import Footer from "./Footer";
import MainContent from "./MainContent";

import "./index.css";

const root = createRoot(document.getElementById("root"));

function Page() {
  return (
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
  );
}

root.render(<Page />);
