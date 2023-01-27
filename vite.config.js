import path from "path"
import { defineConfig } from "vite"

export default defineConfig({
    root: path.resolve(__dirname, 'src'),
    resolve: {
        alias: {
            '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
        }
    },
    build: {
        outDir: '../dist'
    },
    server: {
        port: 8080,
        hot: true,
        open: true
    }
})