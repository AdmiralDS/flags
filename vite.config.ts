import { defineConfig, type PluginOption } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';
import svgr from '@svgr/rollup';
import { checkCodes, generateReactExportFile } from './scripts/build';

checkCodes();
generateReactExportFile();

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es', 'cjs'],
      fileName: (format, entryName) => (format === 'cjs' ? `${entryName}.cjs` : `${entryName}.${format}.js`),
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
    },
    sourcemap: true,
    target: ['es2019'],
  },
  plugins: [react(), svgr({ dimensions: false, svgProps: { focusable: '{false}' } }) as PluginOption],
});
