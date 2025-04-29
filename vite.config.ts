import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import Pages from "vite-plugin-pages";
import { VitePWA } from "vite-plugin-pwa";
import solidPlugin from "vite-plugin-solid";

export default defineConfig({
  plugins: [
    solidPlugin(),
    Pages({
      dirs: ["src/pages"],
    }),
    tailwindcss(),
    VitePWA({
      registerType: "autoUpdate",
      devOptions: {
        enabled: true,
      },
      manifest: {
        name: "solid-pwa",
        short_name: "solid-pwa",
        start_url: "/",
        display: "standalone",
        background_color: "#111827",
        theme_color: "#111827",
        lang: "en",
        scope: "/",
        orientation: "landscape-primary",
        description: "solidjs-pwa is a solidjs app",
        icons: [
          {
            src: "/pwa/manifest-icon-192.maskable.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "/pwa/manifest-icon-512.maskable.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "/pwa/manifest-icon-192.maskable.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "maskable",
          },
          {
            src: "/pwa/manifest-icon-512.maskable.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
        runtimeCaching: [
          {
            urlPattern: /^\/pwa\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'pwa-assets-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 30,
              },
              cacheableResponse: { statuses: [0, 200] },
            },
          },
          {
            urlPattern: /^https:\/\/images\.pokemontcg\.io\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'pokemon-image-cache',
              expiration: {
                maxEntries: 200,
                maxAgeSeconds: 60 * 60 * 24 * 30,
              },
              cacheableResponse: { statuses: [0, 200] },
            },
          },
          {
            urlPattern: /^https:\/\/api\.pokemontcg\.io\/v2\/cards/i,
            handler: 'StaleWhileRevalidate',
            options: {
              cacheName: 'pokemon-api-cache',
              expiration: {
                maxEntries: 5,
                maxAgeSeconds: 60 * 60 * 24 * 1,
              },
              cacheableResponse: { statuses: [0, 200] },
            },
          },
        ],
      },
    }),
  ],
  server: {
    port: 3000,
  },
  build: {
    target: "esnext",
  },
});
