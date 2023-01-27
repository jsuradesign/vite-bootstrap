import path, { resolve } from "path"
import fs from "fs"
import { defineConfig } from "vite"

export default defineConfig({
    root: path.resolve(__dirname, 'src'),
    resolve: {
        alias: {
            '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
        }
    },
    css: {
        devSourcemap: true,
    },
    build: {
        outDir: '../dist',
        sourcemap: true,
        emptyOutDir: true,
        rollupOptions: {
            input: {
                index: resolve(__dirname, "src/index.html"),
            }
        }
    },
    server: {
        port: 8080,
        hot: true,
        open: true
    }
})