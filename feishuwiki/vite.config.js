import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
    base: "./",
    plugins: [vue()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src")
        },
        extensions: ['.ts', '.vue', '.js']
    },
    build: {
        rollupOptions: {
            input: {
                main: path.resolve(__dirname, "index.html")
            }
        }
    },
    server: {
        proxy: {
            "/api": {
                target: "http://localhost:8081",
                ws: true,
                changeOrigin: true,
            }
        }
    }
})
