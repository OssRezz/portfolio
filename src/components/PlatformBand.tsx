import Reveal from "./Reveal";
import { useLang } from "../lang";
import { PLATFORM } from "../data/content";

export default function PlatformBand() {
  const { t } = useLang();

  return (
    <section id="platform">
      <Reveal className="sec-head">
        <div className="sec-k">05 — {t({ es: "Trabajo de plataforma", en: "Platform work" })}</div>
        <h2 className="sec-t">
          {t({ es: "Lo que atraviesa", en: "What cuts across" })}
          <br />
          {t({ es: "varios productos", en: "several products" })}
        </h2>
        <p className="sec-d">
          {t({
            es: "No son productos, son cimientos. El trabajo que no se ve en una captura y que decide si lo demás se sostiene.",
            en: "Not products — foundations. The work that doesn't show in a screenshot and decides whether everything else holds.",
          })}
        </p>
      </Reveal>

      <Reveal>
        <div className="plat">
          {PLATFORM.map((p, i) => (
            <div className="prow" key={i}>
              <h4>{t(p.title)}</h4>
              <div className="d" dangerouslySetInnerHTML={{ __html: t(p.body) }} />
              <div className="s">
                {p.meta.split("\n").map((line, j) => (
                  <div key={j}>{line}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
