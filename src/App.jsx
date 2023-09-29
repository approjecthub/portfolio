import { BrowserRouter } from "react-router-dom";
import React, { Suspense } from "react";
import {
  About,
  Contact,
  Experience,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
const Hero = React.lazy(() => import("./components/Hero"));

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Suspense fallback={<p>Loading...</p>}>
            <Hero />
          </Suspense>
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
