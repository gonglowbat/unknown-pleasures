import react from '@vitejs/plugin-react'
import glsl from 'vite-plugin-glsl'

export default {
    root: 'src/',
    publicDir: '../public/',
    base: './',
    plugins: [
        react(),
        glsl(),
    ],
    server: {
        host: true,
        open: !('SANDBOX_URL' in process.env || 'CODESANDBOX_HOST' in process.env),
    },
    build: {
        outDir: '../dist',
        emptyOutDir: true,
        sourcemap: true,
    },
}
