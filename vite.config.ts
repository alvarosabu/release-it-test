import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'pathe'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'release-it-test',
      fileName: 'release-it-test',
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        exports: 'named',
        globals: {
          vue: 'Vue'
        }
      }
    },
  
  },
  optimizeDeps: {
    exclude: ['vue'],
  },
})
