import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';
import svgr from '@svgr/rollup';
import commonjs from '@rollup/plugin-commonjs';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es', 'cjs'],
      name: 'admiral-react-flags',
    },
    rollupOptions: {
      plugins: [commonjs(), peerDepsExternal()],
    },
    sourcemap: true,
    target: ['es2019'],
  },
  plugins: [react(), svgr({ dimensions: false, svgProps: { focusable: '{false}' } }) as Plugin]
})
