import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    middlewares: [
      (req, res, next) => {
        // Serve static service HTML files for routes like /services/infertility
        const match = req.url?.match(/^\/services\/(infertility|ivf|iui|gynecology|laparoscopy)(\/)?(\?.*)?$/);
        if (match) {
          const service = match[1];
          const staticFile = path.join(process.cwd(), `public/services/${service}/index.html`);
          if (fs.existsSync(staticFile)) {
            res.setHeader('Content-Type', 'text/html; charset=utf-8');
            res.end(fs.readFileSync(staticFile, 'utf-8'));
            return;
          }
        }
        next();
      },
    ],
  },
});
