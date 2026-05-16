import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import { getTemplate } from './template';

function escapeLatex(str: string): string {
  return str
    .replace(/\\/g, '\\textbackslash{}')
    .replace(/%/g, '\\%')
    .replace(/&/g, '\\&')
    .replace(/\$/g, '\\$')
    .replace(/_/g, '\\_')
    .replace(/#/g, '\\#');
}

function resolve(val: string | string[] | undefined | null): string {
  if (val == null) return '';
  if (Array.isArray(val)) {
    return val.map(escapeLatex).join(', ');
  }
  return escapeLatex(val);
}

const rootDir = process.cwd();
const cvData = JSON.parse(readFileSync(join(rootDir, 'data', 'resume.json'), 'utf8'));
const outputTex = getTemplate(cvData, resolve);

writeFileSync(join(rootDir, 'resume.tex'), outputTex, 'utf8');
console.log('Wrote resume.tex');
