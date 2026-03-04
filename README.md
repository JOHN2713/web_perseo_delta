# Perseo Delta (Next.js)

Scaffold base en Next.js para replicar la estructura de `perseo.ec` con enfoque de performance, SEO y evolución rápida.

## Scripts

- `npm run dev` inicia desarrollo.
- `npm run build` genera build de producción.
- `npm run start` ejecuta build compilado.
- `npm run lint` ejecuta ESLint.

## Estructura inicial

- `src/app` rutas públicas equivalentes a la web de referencia.
- `src/components/layout` layout compartido (header/footer).
- `src/components/sections` secciones reutilizables para maquetación.
- `src/content` contenido JSON editable.

## Render + GitHub

- Build command: `npm run build`
- Start command: `npm run start`
- Node recomendado: `>=20`
- Deploy automático: conectar repositorio en Render y habilitar Auto Deploy por push a rama principal.

## CI (GitHub Actions) sugerido

Pipeline mínima: `npm ci` + `npm run lint` + `npm run build`.
