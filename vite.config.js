import { defineConfig } from 'vite';

export default defineConfig({
    // Define base directory for assets and public files
    base: '/',
    resolve: {
        alias: {
            // Resolve paths properly for imports
            '@': '/src',
        },
    },
    build: {
        // Ensure that assets like images are handled correctly
        assetsDir: 'assets',
    },
    server: {
        // Enable to expose local server externally (useful if testing on other devices)
        host: '0.0.0.0',
        port: 5173,
        hmr: true, // Hot Module Replacement for real-time updates
    },
});