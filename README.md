# MBTECH — Marcel Braghini

Este repositório contém o site pessoal de Marcel Braghini, construído com [Astro](https://astro.build/).

## Desenvolvimento

Requisitos: Node.js 18+ e npm/pnpm/yarn.

Instale as dependências e rode o servidor de desenvolvimento:

```bash
npm install
npm i -D chokidar-cli

npm run build:watch
npm run dev
```

Abra http://localhost:4321.

## Build

```bash
npm run build
npm run preview
```

## Deploy no GitHub Pages

Este projeto inclui um workflow em `.github/workflows/deploy.yml` que realiza o build e publica na branch `master`.
