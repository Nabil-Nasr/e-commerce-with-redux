import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()]
  , build: {
    // for more compression (but slower build)
    minify: 'terser',
    cssMinify: 'lightningcss',

    // for backward compatibility
    target: 'es2015',
    cssTarget: 'chrome61',
    terserOptions: { safari10: true, ie8: true },

    rollupOptions: {
      output: {
        // hash is depend on the content of the file
        // which is useful for reset browser caching when the content is changed
        entryFileNames: '[name]-[hash].js',
        chunkFileNames: 'js/[name]-[hash].js',
        assetFileNames: ({ name }) => {
          if (name.match(/\.(ttf|woff|woff2|otf|eot)$/))
            return 'assets/fonts/[name].[ext]';

          if (name.match(/\.(png|jpg|jpeg|gif|svg|webp|bmp|ico)$/))
            return 'assets/images/[name].[ext]';

          if (name === "index.css")
            return '[name]-[hash].[ext]';
          else if (name.match(/\.css$/))
            return 'assets/css/[name]-[hash].[ext]';

          if (name.match(/\.(mp3|aac|amr|ogg|flac|m4a)$/))
            return 'assets/audios/[name].[ext]';

          if (name.match(/\.(mp4|mp4a|mkv|flv|avi|ts|wmv|mpg|mpeg|3gp)$/))
            return 'assets/videos/[name].[ext]';

          return 'assets/[name]-[hash].[ext]';
        }
      }
    }
  }
});
