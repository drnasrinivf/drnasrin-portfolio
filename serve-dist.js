import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 3001;
const DIST_DIR = path.join(__dirname, 'dist');

const server = http.createServer((req, res) => {
  // Remove query string
  let urlPath = req.url.split('?')[0];

  function getContentType(filePath) {
    const ext = path.extname(filePath).toLowerCase();
    switch (ext) {
      case '.js': return 'application/javascript; charset=utf-8';
      case '.css': return 'text/css; charset=utf-8';
      case '.json': return 'application/json; charset=utf-8';
      case '.svg': return 'image/svg+xml';
      case '.png': return 'image/png';
      case '.jpg':
      case '.jpeg': return 'image/jpeg';
      case '.woff': return 'font/woff';
      case '.woff2': return 'font/woff2';
      case '.ttf': return 'font/ttf';
      case '.eot': return 'application/vnd.ms-fontobject';
      case '.otf': return 'font/otf';
      case '.ico': return 'image/x-icon';
      case '.html': return 'text/html; charset=utf-8';
      default: return 'application/octet-stream';
    }
  }

  // Try to serve static files first (with and without trailing slash)
  const filePaths = [
    path.join(DIST_DIR, urlPath),
    path.join(DIST_DIR, urlPath, 'index.html'),
    path.join(DIST_DIR, urlPath + '.html'),
  ];

  let fileFound = false;
  for (const filePath of filePaths) {
    if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
      res.setHeader('Content-Type', getContentType(filePath));
      res.end(fs.readFileSync(filePath));
      fileFound = true;
      break;
    }
  }

  if (!fileFound) {
    // Fallback to index.html for SPA routes
    const indexPath = path.join(DIST_DIR, 'index.html');
    if (fs.existsSync(indexPath)) {
      res.setHeader('Content-Type', 'text/html; charset=utf-8');
      res.end(fs.readFileSync(indexPath, 'utf-8'));
    } else {
      res.writeHead(404);
      res.end('Not Found');
    }
  }
});

server.listen(PORT, '127.0.0.1', () => {
  console.log(`✓ Static server running at http://127.0.0.1:${PORT}`);
  console.log(`\n✓ Visit service pages:`);
  console.log(`  - http://127.0.0.1:${PORT}/services/infertility/`);
  console.log(`  - http://127.0.0.1:${PORT}/services/ivf/`);
  console.log(`  - http://127.0.0.1:${PORT}/services/iui/`);
  console.log(`  - http://127.0.0.1:${PORT}/services/gynecology/`);
  console.log(`  - http://127.0.0.1:${PORT}/services/laparoscopy/`);
});
