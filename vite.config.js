import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  server:{
    port:8080,
    strictPort:false,
    },
    preview:{
    port:4173,
    strictPort:false,
    }
})
