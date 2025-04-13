const fs = require('fs');
const path = require('path');

const buildDir = path.join(__dirname, '../build');
const indexFile = path.join(buildDir, 'index.html');
const notFoundFile = path.join(buildDir, '404.html');

// Ensure the build directory and index.html exist
if (fs.existsSync(indexFile)) {
  fs.copyFileSync(indexFile, notFoundFile);
  console.log('404.html successfully created from index.html');
} else {
  console.error('index.html not found. Ensure the build process has completed.');
  process.exit(1);
}
