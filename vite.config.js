import { fileURLToPath, URL } from "url";

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Components from 'unplugin-vue-components/vite'
import Layouts from 'vite-plugin-vue-layouts'

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
            "@assets": fileURLToPath(new URL("./src/assets", import.meta.url)),
            "@components":fileURLToPath(new URL("./src/components", import.meta.url)),
            "@pages":fileURLToPath(new URL("./src/pages", import.meta.url)),
            // "public":fileURLToPath(new URL("../public", import.meta.url)),
        },
    },
    plugins: [vue(), Pages(), Layouts(), Components()],
})
