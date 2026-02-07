# Learn Vue 2 with Vite

A lightweight learning project to explore Vue 2 concepts enhanced with the Vite build tool for a modern development experience.

## 🚀 Getting Started

### 1. Installation

If you are setting this up for the first time or after cloning, install the dependencies:

```bash
npm install
```

### 2. Development

Start the development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

## 🛠️ Project Setup Details

- **Framework**: Vue 2.7 (Legacy version for educational purposes).
- **Build Tool**: [Vite](https://vitejs.dev/) - Provides lightning-fast reloading.
- **Root Element Rule**: In Vue 2, all component templates must have exactly **one root element** (e.g., a wrapping `<div>` or `<article>`).

## 📁 Key Files

- `index.html`: The main entry point.
- `index.js`: The Vue application logic (uses ES Modules).
- `vite.config.js`: Configuration for the Vue 2 plugin and template compiler.
- `package.json`: Project metadata and scripts.

## 💡 Pro Tip: `npm run dev` vs `npx vite`

- Use **`npm run dev`** for standard daily work. It runs the script defined in `package.json`.
- **`npx vite`** is a shortcut that executes the local Vite binary directly, but doesn't include any custom flags you might have added to your npm scripts.
