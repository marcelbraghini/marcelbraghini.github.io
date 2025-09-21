import { defineConfig } from 'astro/config';

// Para GitHub Pages em marcelbraghini.github.io (user/organization site), base é '/'
export default defineConfig({
  site: 'https://marcelbraghini.github.io',
  output: 'static'
});
