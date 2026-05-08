
import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "redux-persist/lib/storage": path.resolve(__dirname, "./node_modules/redux-persist/es/storage/index.js"),
    },
  },
});




// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import tailwindcss from '@tailwindcss/vite'
// import path from 'path'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [
//     react(),
//     tailwindcss(),
//   ],
//   optimizeDeps: {
//     include: ['redux-persist', 'redux-persist/lib/storage'],
//   },
//   resolve: {
//     alias: {
//       'redux-persist/lib/storage': path.resolve('./node_modules/redux-persist/es/storage'),
//       'redux-persist/integration/react': path.resolve('./node_modules/redux-persist/es/integration/react'),
//       'redux-persist': path.resolve('./node_modules/redux-persist/es/index.js'),
//     },
//   },
// })

