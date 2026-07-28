import { useState } from "react";
import Graph from "./Graph";
import Reveal from "./Reveal";
import { useLang } from "../lang";
import type { CaseStudy as CaseData } from "../data/content";

function Accordion({ subs }: { subs: NonNullable<CaseData["subs"]> }) {
  const { t } = useLang();
  const [open, setOpen] = useState<string | null>(null);

  return (
    <div className="subs">
      {subs.map((s) => {
        const isOpen = open === s.n;
        return (
          <div key={s.n} className={`sub-i${isOpen ? " open" : ""}`}>
            <button type="button" aria-expanded={isOpen} onClick={() => setOpen(isOpen ? null : s.n)}>
              <span className="sn">{s.n}</span>
              <span className="st">{t(s.title)}</span>
              <span className="sx" aria-hidden="true">+</span>
            </button>
            <div className="sc" hidden={!isOpen}>
              <div dangerouslySetInnerHTML={{ __html: t(s.body) }} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function CaseStudy({ data }: { data: CaseData }) {
  const { t } = useLang();

  return (
    <section id={data.id}>
      <Reveal className="sec-head">
        <div className="sec-k">
          {data.num} — {t({ es: "Caso", en: "Case" })}
        </div>
        <h2 className="sec-t">{data.sectionTitle}</h2>
        <p className="sec-d" dangerouslySetInnerHTML={{ __html: t(data.sectionLead) }} />
      </Reveal>

      <Reveal>
        <article className="case">
          <div className="case-hd">
            <div className="case-eyebrow">
              <span>{data.company}</span>
              <span>·</span>
              <span>{t(data.period)}</span>
              <span className="pill">{t(data.role)}</span>
            </div>
            <h3 className="case-name">{data.sectionTitle}</h3>
            <p className="case-claim" dangerouslySetInnerHTML={{ __html: t(data.claim) }} />
          </div>

          <div className="case-body">
            {data.problem && (
              <div className="probl">
                <div>
                  <h5>{t(data.problem.left.h)}</h5>
                  <p dangerouslySetInnerHTML={{ __html: t(data.problem.left.p) }} />
                </div>
                <div>
                  <h5>{t(data.problem.right.h)}</h5>
                  <p dangerouslySetInnerHTML={{ __html: t(data.problem.right.p) }} />
                </div>
              </div>
            )}

            <Graph name={data.graph} lenses={data.lenses} />

            <div className="mets">
              {data.metrics.map((m, i) => (
                <div className="met" key={i}>
                  <div className="v">
                    {m.value}
                    {m.suffix && <i>{m.suffix}</i>}
                  </div>
                  <div className="k">{t(m.label)}</div>
                </div>
              ))}
            </div>

            {data.subs && <Accordion subs={data.subs} />}

            {data.decision && (
              <div className="dec">
                <div className="k">{t(data.decision.kicker)}</div>
                <h4>{t(data.decision.title)}</h4>
                {data.decision.paras.map((p, i) => (
                  <p key={i} dangerouslySetInnerHTML={{ __html: t(p) }} />
                ))}
                <div className="lesson">{t(data.decision.lesson)}</div>
              </div>
            )}

            <div className="tgs">
              {data.tags.map((tag) => (
                <span className="tg" key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        </article>
      </Reveal>
    </section>
  );
}
