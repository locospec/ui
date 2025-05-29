import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read the registry file
const registryPath = path.join(__dirname, '../registry.json');
const registryData = JSON.parse(fs.readFileSync(registryPath, 'utf-8'));

// Filter out components that start with 'comp-'
const filteredItems = registryData.items.filter(item => !item.name.startsWith('comp-'));

// Update the registry data
registryData.items = filteredItems;

// Write the updated registry back to file
fs.writeFileSync(registryPath, JSON.stringify(registryData, null, 2));

console.log('Successfully removed comp-* entries from registry.json');

// Delete component files
const componentsDir = path.join(__dirname, '../registry/default/components');
const files = fs.readdirSync(componentsDir);

files.forEach(file => {
  if (file.startsWith('comp-') && file.endsWith('.tsx')) {
    const filePath = path.join(componentsDir, file);
    fs.unlinkSync(filePath);
    console.log(`Deleted: ${filePath}`);
  }
});

console.log('Successfully deleted comp-* files from registry/default/components');
