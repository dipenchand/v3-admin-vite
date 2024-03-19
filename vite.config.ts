/// <reference types="vitest" />

import { type ConfigEnv, type UserConfigExport, loadEnv } from "vite"
import path, { resolve } from "path"
import vue from "@vitejs/plugin-vue"
import vueJsx from "@vitejs/plugin-vue-jsx"
import { createSvgIconsPlugin } from "vite-plugin-svg-icons"
import svgLoader from "vite-svg-loader"
import UnoCSS from "unocss/vite"

/** Configuration document: https://vitejs.dev/config */
export default ({ mode }: ConfigEnv): UserConfigExport => {
  const viteEnv = loadEnv(mode, process.cwd()) as ImportMetaEnv
  const { VITE_PUBLIC_PATH, VITE_PORT, VITE_HOST } = viteEnv
  console.log(VITE_HOST)
  return {
    base: VITE_PUBLIC_PATH,
    resolve: {
      alias: {
        "@": resolve(__dirname, "./src")
      }
    },
    server: {
      host: VITE_HOST,
      port: VITE_PORT,
      open: false,
      cors: true,
      strictPort: false,
      proxy: {
        "/api/v1": {
          target: "https://mock.mengxuegu.com/mock/63218b5fb4c53348ed2bc212",
          ws: true,
          changeOrigin: true
        }
      },
      // https://vitejs.dev/guide/performance#warm-up-frequently-used-files
      warmup: {
        clientFiles: ["./src/layouts/**/*.vue"]
      }
    },
    build: {
      chunkSizeWarningLimit: 2048,
      reportCompressedSize: false,
      assetsDir: "static",
      rollupOptions: {
        output: {
          manualChunks: {
            vue: ["vue", "vue-router", "pinia"],
            element: ["element-plus", "@element-plus/icons-vue"]
          }
        }
      }
    },
    esbuild:
      mode === "development"
        ? undefined
        : {
            /** Remove `console.log` when packaging */
            pure: ["console.log"],
            /** Remove `debugger` when packaging */
            drop: ["debugger"],
            /** Remove all comments when packaging */
            legalComments: "none"
          },
    /** Vite Plugins */
    plugins: [
      vue(),
      vueJsx(),
      /** Convert SVG static images into Vue components */
      svgLoader({ defaultImport: "url" }),
      /** SVG */
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), "src/icons/svg")],
        symbolId: "icon-[dir]-[name]"
      }),
      /** UnoCSS */
      UnoCSS()
    ],
    /** Vitest Unit Test Configuration：https://vitest.dev/config */
    test: {
      include: ["tests/**/*.test.ts"],
      environment: "jsdom"
    }
  }
}
