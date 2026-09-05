const fs = require('fs');
const path = require('path');

function getFiles(dir, files = []) {
  fs.readdirSync(dir).forEach(file => {
    const p = path.join(dir, file);
    if (fs.statSync(p).isDirectory()) getFiles(p, files);
    else if (p.endsWith('.mdx')) files.push(p);
  });
  return files;
}

getFiles('docs/school').forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // Find all H2 headers
  const headingRegex = /^##\s+(\d+)\.\s+(.*)$/gm;
  let match;
  let headings = [];
  while ((match = headingRegex.exec(content)) !== null) {
    headings.push({
      original: match[0],
      number: match[1],
      title: match[2],
      index: match.index
    });
  }

  if (headings.length === 0) return;

  // Check if they are perfectly sequential starting from 1
  let isPerfect = true;
  for (let i = 0; i < headings.length; i++) {
    if (parseInt(headings[i].number, 10) !== i + 1) {
      isPerfect = false;
      break;
    }
  }

  // If not perfect, rewrite them sequentially
  if (!isPerfect) {
    let newContent = content;
    let offset = 0;
    
    // We must replace them in order. 
    // Using string replace is safe if we only replace the specific heading at its index.
    // Easiest way is to just do a regex replace with a replacer function
    let counter = 1;
    newContent = content.replace(/^##\s+(\d+)\.\s+(.*)$/gm, (match, p1, p2) => {
      const newHeader = `## ${counter}. ${p2}`;
      counter++;
      return newHeader;
    });

    fs.writeFileSync(file, newContent, 'utf8');
    console.log(`Fixed numbering in ${file}`);
  }
});
