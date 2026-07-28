import { useMemo, useState } from "react";
import { GRAPHS, NODE_H } from "../data/graphs";
import type { Graph as GraphDef } from "../data/graphs";
import { useLang } from "../lang";

/** Cubic bezier between two nodes; a vertical straight line when they share a column. */
function edgePath(g: GraphDef, aId: string, bId: string): string {
  const a = g.nodes.find((n) => n.id === aId)!;
  const b = g.nodes.find((n) => n.id === bId)!;
  if (a.x === b.x) {
    const x = a.x + g.nw / 2;
    return `M${x} ${a.y + NODE_H} L${x} ${b.y}`;
  }
  const x1 = a.x + g.nw;
  const y1 = a.y + NODE_H / 2;
  const x2 = b.x;
  const y2 = b.y + NODE_H / 2;
  return `M${x1} ${y1} C${x1 + 48} ${y1}, ${x2 - 48} ${y2}, ${x2} ${y2}`;
}

interface Props {
  /** key into GRAPHS */
  name: string;
  /** Backdrop mode: no labels, no interaction, lower contrast. */
  ghost?: boolean;
  /** Show the lens chips (requires the graph to define lenses). */
  lenses?: boolean;
}

export default function Graph({ name, ghost = false, lenses = false }: Props) {
  const g = GRAPHS[name];
  const { t } = useLang();
  const uid = ghost ? `${name}-ghost` : name;

  const [lensId, setLensId] = useState<string>("all");
  const [hovered, setHovered] = useState<string | null>(null);

  const lens = g.lenses?.find((l) => l.id === lensId) ?? null;

  /** The set of node ids currently highlighted; null = no dimming. */
  const active = useMemo<Set<string> | null>(() => {
    if (ghost) return null;
    if (hovered) {
      const ids = new Set<string>([hovered]);
      g.edges.forEach(([a, b]) => {
        if (a === hovered) ids.add(b);
        if (b === hovered) ids.add(a);
      });
      return ids;
    }
    if (lens?.nodes) return new Set(lens.nodes);
    return null;
  }, [ghost, hovered, lens, g.edges]);

  const caption = useMemo(() => {
    if (hovered) return t(g.nodes.find((n) => n.id === hovered)!.body);
    if (lens && lens.nodes) return t(lens.caption);
    return t(g.idle);
  }, [hovered, lens, g, t]);

  const isHot = (id: string) => !!active && active.has(id);
  const edgeHot = (a: string, b: string) => !!active && active.has(a) && active.has(b);

  const svg = (
    <svg
      viewBox={`0 0 ${g.w} ${g.h}`}
      xmlns="http://www.w3.org/2000/svg"
      className={ghost ? "ghost" : `dia${active ? " dim" : ""}`}
      role={ghost ? "presentation" : "img"}
      aria-label={ghost ? undefined : t(g.idle)}
    >
      <defs>
        {g.edges.map(([a, b], i) => (
          <path key={i} id={`${uid}-e${i}`} d={edgePath(g, a, b)} fill="none" />
        ))}
      </defs>

      {!ghost &&
        g.stages.map((s, i) => (
          <text key={i} className="stagelab" x={s.x} y={12} textAnchor="middle">
            {t(s.label)}
          </text>
        ))}

      {g.edges.map(([a, b], i) => (
        <use
          key={i}
          href={`#${uid}-e${i}`}
          className={`gedge${edgeHot(a, b) ? " hot" : ""}`}
        />
      ))}

      {g.nodes.map((n) => (
        <g
          key={n.id}
          className={`gnode ${n.own ? "own" : "ext"}${isHot(n.id) ? " hot" : ""}`}
          onMouseEnter={ghost ? undefined : () => setHovered(n.id)}
          onMouseLeave={ghost ? undefined : () => setHovered(null)}
          onFocus={ghost ? undefined : () => setHovered(n.id)}
          onBlur={ghost ? undefined : () => setHovered(null)}
          tabIndex={ghost ? undefined : 0}
        >
          <rect x={n.x} y={n.y} width={g.nw} height={NODE_H} rx={11} />
          {!ghost && (
            <>
              <text className="nlab" x={n.x + 15} y={n.y + 23}>
                {n.label}
              </text>
              <text className="ntec" x={n.x + 15} y={n.y + 40}>
                {t(n.tech)}
              </text>
            </>
          )}
        </g>
      ))}

      {g.edges.map(([a, b], i) => {
        const dur = `${2.4 + (i % 7) * 0.4}s`;
        const begin = `${(i % 9) * 0.45}s`;
        const peak = ghost ? 0.5 : 0.9;
        return (
          <circle
            key={i}
            r={ghost ? 2.2 : 3}
            className={`gpulse${edgeHot(a, b) ? " hot" : ""}`}
            opacity={peak}
          >
            <animateMotion dur={dur} repeatCount="indefinite" begin={begin}>
              <mpath href={`#${uid}-e${i}`} />
            </animateMotion>
            <animate
              attributeName="opacity"
              values={`0;${peak};0`}
              dur={dur}
              repeatCount="indefinite"
              begin={begin}
            />
          </circle>
        );
      })}
    </svg>
  );

  if (ghost) return svg;

  return (
    <div className="dframe">
      <div className="dtitle">
        <span>{t({ es: "Arquitectura", en: "Architecture" })}</span>
        {lenses && g.lenses ? (
          <div className="lenses">
            {g.lenses.map((l) => (
              <button
                key={l.id}
                type="button"
                className={`lens${l.id === lensId ? " on" : ""}`}
                onClick={() => setLensId(l.id)}
              >
                {t(l.label)}
              </button>
            ))}
          </div>
        ) : (
          <span>{t({ es: "pasa el mouse sobre un servicio", en: "hover a service" })}</span>
        )}
      </div>

      <div className="dscroll">{svg}</div>

      {!lenses && (
        <div className="legend">
          <span>
            <i className="own" />
            {t({ es: "Construido por mí", en: "Built by me" })}
          </span>
          <span>
            <i className="ext" />
            {t({ es: "De terceros — lo administro", en: "Third-party — I operate it" })}
          </span>
        </div>
      )}

      {/* Authored, static copy — never user input. */}
      <div className="dtip" dangerouslySetInnerHTML={{ __html: caption }} />
    </div>
  );
}
