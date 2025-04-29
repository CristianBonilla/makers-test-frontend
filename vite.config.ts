import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  preview: {
    port: 11451,
    strictPort: true
  },
  server: {
    port: 11450,
    strictPort: true
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        silenceDeprecations: [
          'mixed-decls',
          'color-functions',
          'global-builtin',
          'import'
        ]
      }
    }
  }
});
