import Backdrop from "./components/Backdrop";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import CaseStudy from "./components/CaseStudy";
import PlatformBand from "./components/PlatformBand";
import About from "./components/About";
import Footer from "./components/Footer";
import { CASES } from "./data/content";

export default function App() {
  return (
    <>
      <Backdrop />
      <Nav />
      <div className="wrap">
        <Hero />
        {CASES.map((c) => (
          <CaseStudy key={c.id} data={c} />
        ))}
        <PlatformBand />
        <About />
      </div>
      <Footer />
    </>
  );
}
