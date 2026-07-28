import { useLang } from "../lang";
import { PROFILE } from "../data/content";
import { cvHref } from "../cv";

export default function Hero() {
  const { lang, t } = useLang();
  const words = PROFILE.headline[lang];

  return (
    <header>
      <span className="badge">
        <span className="p" />
        {t(PROFILE.availability)}
      </span>

      <h1 key={lang}>
        {words.map((w, i) => {
          const grad = w.startsWith("§");
          const text = grad ? w.slice(1) : w;
          return (
            <span key={i}>
              {i === 3 && <br />}
              <span
                className={`w${grad ? " grad" : ""}`}
                style={{ animationDelay: `${0.12 + i * 0.08}s` }}
              >
                {text}
              </span>{" "}
            </span>
          );
        })}
      </h1>

      <p className="sub" dangerouslySetInnerHTML={{ __html: t(PROFILE.lede) }} />

      <div className="hero-cta">
        <a className="mbtn pri" href="#insights">
          {t({ es: "Ver el trabajo", en: "See the work" })} →
        </a>
        <a className="mbtn sec" href={cvHref(lang)} download>
          {t({ es: "Descargar CV", en: "Download CV" })} ↓
        </a>
      </div>

      <div className="hint">{t(PROFILE.hint)}</div>
    </header>
  );
}
