import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
  test: {
    environment: 'node',
    include: ['tests/**/*.test.ts'],
    globals: true, // Allow usage of describe/it/expect without importing
    passWithNoTests: false, // Ensure tests are running
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'],
    },
    // We do NOT use watch mode for CI. We use `vitest run`.
    watch: false, 
  },
  resolve: {
    alias: {
      '@site': path.resolve(__dirname),
    },
  },
});
