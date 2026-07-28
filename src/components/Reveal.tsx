import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

/** Fades content in the first time it enters the viewport. */
export default function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || seen) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { threshold: 0.08 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [seen]);

  return (
    <div ref={ref} className={`rv${seen ? " in" : ""} ${className}`.trim()}>
      {children}
    </div>
  );
}
