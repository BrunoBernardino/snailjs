// This script is necessary only because `vercel` uses `npm install` instead of `npm install --production`

const fs = require('fs');
const packageJson = require('./package.json');

const newPackageJsonPath = 'package-clean.json';

const newPackageJson = { ...packageJson };
delete newPackageJson.devDependencies;
delete newPackageJson.scripts.prepare;

fs.writeFileSync(newPackageJsonPath, JSON.stringify(newPackageJson, null, 2));
