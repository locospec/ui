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
console.log('✅ Successfully removed comp-* entries from registry.json');

// Function to delete files matching pattern in a directory
function deleteFilesInDir(dirPath, pattern) {
  if (!fs.existsSync(dirPath)) {
    console.log(`ℹ️  Directory does not exist: ${dirPath}`);
    return;
  }

  const files = fs.readdirSync(dirPath);
  let deletedCount = 0;

  files.forEach(file => {
    if (file.match(pattern)) {
      const filePath = path.join(dirPath, file);
      try {
        fs.unlinkSync(filePath);
        console.log(`🗑️  Deleted: ${filePath}`);
        deletedCount++;
      } catch (err) {
        console.error(`❌ Error deleting ${filePath}:`, err.message);
      }
    }
  });

  return deletedCount;
}

// Delete component files from registry
const componentsDir = path.join(__dirname, '../registry/default/components');
const registryDeleted = deleteFilesInDir(componentsDir, /^comp-.*\.tsx$/);
console.log(`✅ Deleted ${registryDeleted || 0} files from registry/default/components`);

// Delete files from public/r
const publicRDir = path.join(__dirname, '../public/r');
const publicRDeleted = deleteFilesInDir(publicRDir, /^comp-.*\.json$/);
console.log(`✅ Deleted ${publicRDeleted || 0} files from public/r`);

// Delete files from public/r/legacy
const publicRLegacyDir = path.join(__dirname, '../public/r/legacy');
const publicRLegacyDeleted = deleteFilesInDir(publicRLegacyDir, /^comp-.*\.json$/);
console.log(`✅ Deleted ${publicRLegacyDeleted || 0} files from public/r/legacy`);
