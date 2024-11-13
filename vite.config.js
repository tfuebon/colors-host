import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "host",             // Nombre de la host app
      remotes: {                    // Nombre de las remote apps que se van a usar dentro de la host app, se especifica la url del fichero generado por Module Federation
        colorPicker: "https://67348ac72ebf9cd83a585dd3--incandescent-manatee-f7717e.netlify.app/assets/remoteEntry.js",
        colorList: "https://67348ae4eb009ed80c480810--celebrated-jelly-ca5fbf.netlify.app/assets/remoteEntry.js",
      },
      shared: ["react"],            // Nombre de las dependencias compartidas
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",

    minify: false,
    cssCodeSplit: false,
  },
});

//import { defineConfig } from "vite";
//import react from "@vitejs/plugin-react";
//import federation from "@originjs/vite-plugin-federation";
//
//export default defineConfig({
//  plugins: [
//    react(),
//    federation({
//      name: "host",
//      remotes: {
//        colorList: "http://localhost:40004/remoteEntry.js", // Conexión al microfrontend en desarrollo
//        colorPicker: "http://localhost:40002/remoteEntry.js", // Conexión al microfrontend en desarrollo
//      },
//      shared: ["react"],
//    }),
//  ],
//  server: {
//    port: 5173,
//    cors: true, // Permite CORS para las conexiones del microfrontend
//  },
//});
