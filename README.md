# Site pessoal — Astro

Este repositório contém o site pessoal de Marcel Braghini, construído com [Astro](https://astro.build/).

## Desenvolvimento

Requisitos: Node.js 18+ e npm/pnpm/yarn.

Instale as dependências e rode o servidor de desenvolvimento:

```bash
npm install
npm run dev
```

Abra http://localhost:4321.

## Build

```bash
npm run build
npm run preview
```

## Deploy no GitHub Pages

Este projeto inclui um workflow em `.github/workflows/deploy.yml` que realiza o build e publica na branch `gh-pages`. Para sites do tipo usuário (marcelbraghini.github.io), o Pages pode servir direto da branch `master`/`main` com output em `./` — mas aqui usamos `gh-pages` por simplicidade e independência.

Após o primeiro deploy, configure em Settings → Pages para usar a branch `gh-pages`.
