import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import remarkFootnotes from 'remark-footnotes';

export default defineConfig({
  integrations: [mdx( {
    remarkPlugins: [[remarkFootnotes, { inlineNotes: true }]]
  })],
  site: 'https://LearningMood.github.io/culture-graphique/',
  vite: {
    resolve: {
      alias: {
        '@': '/src', // <-- racine
        '@styles': '/src/styles',
        '@components': '/src/components',
        '@layouts': '/src/layouts',
        '@content': '/src/content',
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import "@styles/_variables.scss";
            @import "@styles/_mixins.scss";
            @import "@styles/_functions.scss";
          `
        }
      }
    }
  }
});
