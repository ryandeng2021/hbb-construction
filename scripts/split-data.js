const fs = require('fs');
const path = require('path');

const src = fs.readFileSync('src/data.js', 'utf8');

const sections = [
  { name: 'common', start: 'export const backgroundImages', end: 'export const processSteps' },
  { name: 'process', start: 'export const processSteps', end: 'export const badgesData' },
  { name: 'badges', start: 'export const badgesData', end: 'export const footerData' },
  { name: 'footer', start: 'export const footerData', end: 'export const whyChooseSection' },
  { name: 'whyChoose', start: 'export const whyChooseSection', end: 'export const projects' },
  { name: 'about', start: 'export const aboutSection', end: 'export const coreAdvantages' },
  { name: 'coreAdvantages', start: 'export const coreAdvantages', end: 'export const teamRows' },
  { name: 'team', start: 'export const teamRows', end: null },
];

function extractBetween(content, startMarker, endMarker) {
  const startIdx = content.indexOf(startMarker);
  if (startIdx === -1) throw new Error('Start not found: ' + startMarker);
  const endIdx = endMarker ? content.indexOf(endMarker, startIdx + 1) : content.length;
  if (endMarker && endIdx === -1) throw new Error('End not found: ' + endMarker);
  return content.slice(startIdx, endIdx).trim();
}

const dataDir = 'src/data';
fs.mkdirSync(dataDir, { recursive: true });
fs.mkdirSync(path.join(dataDir, 'projects'), { recursive: true });

const importLine = "import { getAssetPath } from '../utils/path';\n\n";

for (const section of sections) {
  const content = extractBetween(src, section.start, section.end);
  const filePath = path.join(dataDir, section.name + '.js');
  fs.writeFileSync(filePath, importLine + content + '\n');
  console.log('Created', filePath);
}

// Extract and split individual projects from the array
function splitTopLevelObjects(arraySource) {
  const objects = [];
  let depth = 1; // already inside the projects array
  let objectStart = -1;
  let inString = false;
  let stringChar = '';
  let escaped = false;

  for (let i = 0; i < arraySource.length; i++) {
    const ch = arraySource[i];

    if (inString) {
      if (escaped) {
        escaped = false;
      } else if (ch === '\\') {
        escaped = true;
      } else if (ch === stringChar) {
        inString = false;
      }
      continue;
    }

    if (ch === "'" || ch === '"' || ch === '`') {
      inString = true;
      stringChar = ch;
      continue;
    }

    if (ch === '[') {
      depth++;
      continue;
    }
    if (ch === ']') {
      depth--;
      continue;
    }
    if (ch === '{') {
      if (depth === 1 && objectStart === -1) objectStart = i;
      depth++;
      continue;
    }
    if (ch === '}') {
      depth--;
      if (depth === 1 && objectStart !== -1) {
        objects.push(arraySource.slice(objectStart, i + 1).trim());
        objectStart = -1;
      }
    }
  }

  return objects;
}

const projectsMarker = 'export const projects = [';
const projectsStart = src.indexOf(projectsMarker);
const aboutMarker = '// About section data';
const projectsEnd = src.indexOf(aboutMarker, projectsStart);
const projectsArraySource = src.slice(
  projectsStart + projectsMarker.length,
  projectsEnd
).trim();

const projects = splitTopLevelObjects(projectsArraySource);

console.log('Found', projects.length, 'projects');

const projectFiles = [];
for (const project of projects) {
  const idMatch = project.match(/id:\s*(\d+)/);
  if (!idMatch) throw new Error('Project missing id');
  const id = idMatch[1];
  const varName = 'project' + id;
  const fileName = 'project-' + id + '.js';
  const fileContent = "import { getAssetPath } from '../../utils/path';\n\n" + 'export const ' + varName + ' = ' + project + ';\n';
  const filePath = path.join(dataDir, 'projects', fileName);
  fs.writeFileSync(filePath, fileContent);
  projectFiles.push({ fileName: fileName.replace('.js', ''), varName });
  console.log('Created project', fileName);
}

const projectImports = projectFiles
  .map((p) => "import { " + p.varName + " } from './" + p.fileName + "';")
  .join('\n');
const projectExports =
  'export const projects = [\n  ' + projectFiles.map((p) => p.varName).join(',\n  ') + '\n];\n';

const projectsComment = `// Project content structure:
// - heroImage: Hero image at top (optional, falls back to 'image')
// - content: Array of sections with layout ('one'|'two'|'three'), images, video, description
`;

fs.writeFileSync(
  path.join(dataDir, 'projects', 'index.js'),
  projectsComment + '\n' + projectImports + '\n\n' + projectExports
);

const indexContent = `// Central data exports - split into domain-specific modules
export { backgroundImages, heroCarousel, usefulLinks, navigationMenu } from './common';
export { processSteps, constructionTimeline } from './process';
export { badgesData } from './badges';
export { footerData } from './footer';
export { whyChooseSection, whyChoose } from './whyChoose';
export { projects } from './projects';
export { aboutSection } from './about';
export { coreAdvantages } from './coreAdvantages';
export { teamRows, teamMembers } from './team';
`;

fs.writeFileSync(path.join(dataDir, 'index.js'), indexContent);
console.log('Done!');
