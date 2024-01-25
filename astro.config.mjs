import path from 'path';
import { fileURLToPath } from 'url';

import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import { SITE } from './src/utils/config.ts';
import netlify from '@astrojs/netlify/functions';
import partytown from '@astrojs/partytown'


const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
  site: SITE.site,
  base: SITE.base,
  trailingSlash: SITE.trailingSlash ? 'always' : 'never',

  output: 'server',
  adapter: netlify(),

  integrations: [
    tailwind(),
    partytown({
			config: {
			  forward: ["dataLayer.push"],
			},
		}),
  ],

  vite: {
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src'),
      },
    },
  },
});
