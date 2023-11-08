import { defineConfig } from 'tsup';

export default defineConfig({
    bundle: true,
    clean: true,
    dts: true,
    // entry: ['src/**/*.ts'],
    entry: ['src/index.ts'],
    format: 'esm',
    outDir: 'out',
    sourcemap: true,
    target: 'node18',
    minify: true,
    treeshake: 'smallest',
    // metafile: true,
});
