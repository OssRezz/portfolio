import { useEffect, useState } from "react";
import { useLang } from "../lang";
import { CASES } from "../data/content";

export default function Nav() {
  const { lang, setLang, t } = useLang();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const links = [
    ...CASES.map((c) => ({ href: `#${c.id}`, label: c.short })),
    { href: "#platform", label: t({ es: "Plataforma", en: "Platform" }) },
    { href: "#contact", label: t({ es: "Contacto", en: "Contact" }) },
  ];

  return (
    <nav>
      <div className="nav-in">
        <div className="mark">
          <span className="orb" />
          James Osorio
        </div>

        <div className="nav-links">
          {links.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </div>

        <div className="nav-right">
          <div className="lang" role="group" aria-label="Idioma / Language">
            {(["es", "en"] as const).map((l) => (
              <button
                key={l}
                type="button"
                className={l === lang ? "on" : ""}
                aria-pressed={l === lang}
                onClick={() => setLang(l)}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>
          <button
            type="button"
            className="burger"
            aria-label={t({ es: "Menú", en: "Menu" })}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span /><span />
          </button>
        </div>
      </div>

      {open && (
        <div className="sheet" onClick={() => setOpen(false)}>
          {links.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </div>
      )}
    </nav>
  );
}
