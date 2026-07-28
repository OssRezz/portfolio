# Portafolio — James Osorio Florez

Sitio personal. Una sola página, bilingüe (ES/EN), con los diagramas de arquitectura
de cuatro sistemas reales dibujados desde datos tipados.

**En vivo:** https://ossrezz.github.io/portfolio

---

## Stack

| Pieza | Elección |
| --- | --- |
| Build | Vite 8 |
| UI | React 19 + TypeScript |
| Estilos | CSS con custom properties, un archivo por zona (`src/styles/`) |
| Deploy | GitHub Pages vía `gh-pages` |

Sin framework de UI, sin librería de animación, sin dependencias de runtime más allá
de React. Los diagramas son SVG generado desde una definición de grafo — no imágenes.

## Cómo corre

```bash
npm install
npm run dev       # http://localhost:5173/portfolio/
npm run build     # -> dist/
npm run preview   # sirve dist/ como quedaría en producción
```

> El sitio vive en un sub-path (`/portfolio/`), así que `base` está fijado en
> `vite.config.ts`. Cualquier ruta a un asset de `public/` debe pasar por
> `import.meta.env.BASE_URL` — ver `src/cv.ts`.

## Deploy

```bash
npm run deploy    # build + publica dist/ en la rama gh-pages
```

## Estructura

```
src/
  data/
    graphs.ts     Definición de los cuatro diagramas: nodos, aristas, lentes.
                  Cambiar la arquitectura aquí cambia el dibujo.
    content.ts    Todo el copy, bilingüe. Ningún texto vive en un componente.
  components/
    Graph.tsx     Renderiza un grafo a SVG; hover resalta el nodo y sus vecinos,
                  las lentes resaltan un flujo completo.
    CaseStudy.tsx Un caso: cabecera, problema, diagrama, métricas, bloques.
    ...
  styles/         Un archivo por zona, importados desde index.css.
  lang.tsx        Contexto de idioma. `t({es, en})` resuelve al activo.
  cv.ts           Rutas de los PDFs del CV, con el prefijo del sub-path.
```

## Añadir un caso

1. Definir su grafo en `src/data/graphs.ts`.
2. Añadir la entrada en `CASES` dentro de `src/data/content.ts`.

No hay que tocar ningún componente: la página se arma desde esos dos archivos.

## Nota sobre `dangerouslySetInnerHTML`

El copy usa `<b>`, `<code>` e `<i>` para enfatizar dentro de párrafos largos.
Todo ese texto es estático y está en el repositorio — nunca proviene de una entrada
de usuario ni de una API. No hay superficie de XSS.
