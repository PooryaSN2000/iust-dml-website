import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'path';

export default defineConfig({
  base: './',
  plugins: [
    tailwindcss()
  ],
  server: {
    port: 5174
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        research: resolve(import.meta.dirname, 'research.html'),
        people: resolve(import.meta.dirname, 'people.html'),
        projects: resolve(import.meta.dirname, 'projects.html'),
        publications: resolve(import.meta.dirname, 'publications.html'),
        seminars: resolve(import.meta.dirname, 'seminars.html'),
        join: resolve(import.meta.dirname, 'join.html'),
        contact: resolve(import.meta.dirname, 'contact.html'),
      }
    }
  }
});
