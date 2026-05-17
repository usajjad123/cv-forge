# 🛠️ CV-Forge: JSON-to-LaTeX Resume Engine

An automated, single-state build pipeline that decouples professional resume data from its visual LaTeX typesetting layout. Built entirely with TypeScript, it inputs a clean `resume.json` state, runs dynamic template literal mapping, and compiles into a pixel-perfect, single-page resume.

---

## 💡 Why This Exists?
Managing resumes in raw LaTeX or heavy Word files sucks. You either mess up the layout macros while updating content, or you get lost in backslash hell. 

**CV-Forge fixes this:**
- **Separation of Concerns:** Data lives strictly in JSON (`data/resume.json`), layout lives strictly in TypeScript (`src/template.ts`), and logic orchestrates the build (`src/builder.ts`).
- **Zero Macro Corruption:** The code safely escapes native LaTeX special characters (`%`, `&`, `$`, `_`, `#`) so you can type raw strings in JSON without breaking the compiler.
- **Iterative Power:** Perfect for remote engineers who want to version-control their career history using clean Git commits.

---

## 📂 Project Architecture

```text
cv-forge/
├── data/
│   └── resume.json         # Pure Data (Your entire career history)
├── src/
│   ├── template.ts         # Pure Layout (LaTeX template literal with dynamic mapping)
│   └── builder.ts          # Pure Logic (File I/O, character escaping, orchestration)
├── resume.tex              # Generated Output (Compiled artifact ready for pdflatex)
├── package.json            # Scripts & build tooling
├── tsconfig.json           # TS environment configurations
└── .gitignore              # Keeps node_modules & build artifacts away from cloud