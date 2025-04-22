import { defineConfig } from "@solidjs/start/config";
import tailwindcss from "@tailwindcss/vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  vite: {
    plugins: [
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
          background_color: "#1b1b1b",
          theme_color: "#1b1b1b",
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
        // workbox: {
        //   maximumFileSizeToCacheInBytes: 4000000, // 4MB
        // },
      }),
    ],
  },
});
