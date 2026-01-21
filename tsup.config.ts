import { defineConfig } from 'tsup';

export default defineConfig({
  entry: { 'delog': 'src/index.ts'},
  format: ['esm', 'cjs'],
  dts: true,
  clean: true,
});