import { useEffect, useState } from "react";
import Graph from "./Graph";

/** The hero topology, unlabelled: the same architecture the Insights case reveals later. */
export default function Backdrop() {
  const [faded, setFaded] = useState(false);

  useEffect(() => {
    const onScroll = () => setFaded(window.scrollY > window.innerHeight * 0.7);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div id="heroNet" className={faded ? "faded" : ""} aria-hidden="true">
        <Graph name="insights" ghost />
      </div>
      <div className="aur" aria-hidden="true" />
      <div className="vig" aria-hidden="true" />
    </>
  );
}
