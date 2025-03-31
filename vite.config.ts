import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
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
