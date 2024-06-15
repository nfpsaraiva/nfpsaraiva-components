import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'nfpsaraiva-compoments', // Name your library here
    },
    rollupOptions: {
      // Externalize dependencies that your library doesn't provide
      external: ['react', 'react-dom'],
      output: {
        // Provide global variables to use when importing the library
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './vitest.setup.mjs',
  },
});
