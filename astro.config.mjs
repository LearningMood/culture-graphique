import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  integrations: [mdx()],
  site: 'https://LearningMood.github.io/culture-graphique/',
  vite: {
    resolve: {
      alias: {
        '@styles': '/src/styles',
        '@components': '/src/components',
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import "@styles/_variables.scss";
            @import "@styles/_mixins.scss";
          `
        }
      }
    }
  }
});