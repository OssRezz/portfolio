import Reveal from "./Reveal";
import { useLang } from "../lang";
import { ABOUT } from "../data/content";

export default function About() {
  const { t } = useLang();

  return (
    <section id="about">
      <Reveal>
        <div className="sec-k">06 — {t({ es: "Perfil", en: "About" })}</div>
      </Reveal>
      <Reveal>
        <div style={{ marginTop: 24 }}>
          <p className="quote" dangerouslySetInnerHTML={{ __html: t(ABOUT.quote) }} />
          <div className="about-g">
            {ABOUT.paras.map((p, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: t(p) }} />
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
