import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: '0.0.0.0',  // Allows access from outside the container
    port: 5173,
    watch: {
      usePolling: true, // Use polling to detect file changes
    }
  }
});
