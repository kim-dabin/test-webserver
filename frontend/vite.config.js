import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default ({mode}) => {

    process.env = {...process.env, ...loadEnv(mode, process.cwd())};

    return defineConfig({
        define: {
            'global': {},
          },
          build: {
            chunkSizeWarningLimit: 1024 * 1024,
          },
        plugins: [
            vue()
        ],
        resolve: {
          alias: {
            '@': path.resolve(__dirname, './src'),
          },
        }
    })
}