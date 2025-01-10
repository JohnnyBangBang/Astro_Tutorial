// @ts-check
import { defineConfig } from 'astro/config';

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  site: 'https://johnnybangbang.github.io',
  base: 'Astro_Tutorial',
  integrations: [preact()],
});