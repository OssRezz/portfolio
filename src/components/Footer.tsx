import Reveal from "./Reveal";
import { useLang } from "../lang";
import { CONTACT, PROFILE } from "../data/content";
import { CV } from "../cv";

export default function Footer() {
  const { t } = useLang();

  return (
    <footer id="contact">
      <div className="wrap">
        <Reveal>
          <div className="sec-k">07 — {t({ es: "Contacto", en: "Contact" })}</div>
        </Reveal>
        <Reveal>
          <div style={{ marginTop: 20 }}>
            <h2 className="f-h" dangerouslySetInnerHTML={{ __html: t(CONTACT.heading) }} />
            <a className="f-mail" href={`mailto:${PROFILE.email}`}>
              {PROFILE.email}
            </a>
          </div>
        </Reveal>
        <div className="f-row">
          <span>© {new Date().getFullYear()} {PROFILE.name} · {t(PROFILE.location)} · UTC−5</span>
          <span className="f-links">
            <a href={PROFILE.github} target="_blank" rel="noreferrer">GitHub</a>
            <a href={PROFILE.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={`tel:${PROFILE.phone.replace(/\s/g, "")}`}>{PROFILE.phone}</a>
            <a href={CV.es} download>CV ES</a>
            <a href={CV.en} download>CV EN</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
