<div align="center">
  <img alt="Creative Collection Logo" width="120" height="120" src="./src/assets/layouts/logo.png">
  <h1>Creative Collection</h1>
</div>

## ⚡ Introduction

Creative Collection is a File management system, based on mainstream framework such as Vue3, TypeScript, Element Plus, Pinia and Vite

## 📚 Document

- Documentation: [link]()

## Feature

- **Vue3**：The latest Vue3 composition API using Vue3 + script setup
- **Element Plus**：Vue3 version of Element UI
- **Pinia**: An alternative to Vuex in Vue3
- **Vite**：Really fast
- **Vue Router**：router
- **TypeScript**：JavaScript With Syntax For Types
- **PNPM**：Faster, disk space saving package management tool
- **Scss**：Consistent with Element Plus
- **CSS variable**：Mainly controls the layout and color of the item
- **ESlint**：Code verification
- **Prettier**： Code formatting
- **Axios**: Promise based HTTP client (encapsulated)
- **UnoCSS**: Real-time atomized CSS engine with high performance and flexibility
- **Mobile Compatible**: The layout is compatible with mobile page resolution

## 🚀 Development

```bash
# Configure
1. installation of the recommended plugins in the .vscode directory
2. node version 18.x or 20+
3. pnpm version 8.x or latest

# Clone
git clone https://github.com/sacdev/creative_collection.git

# Enter the Frontend Project Directory
cd frontend

# Install Dependencies
pnpm i

# Start the Service
pnpm dev
```

## ✔️ Preview

```bash
# Stage Environment
pnpm preview:stage

# Prod Environment
pnpm preview:prod
```

## 📦️ Multi-environment packaging

```bash
# Build the Stage Environment
pnpm build:stage

# Build the Prod Environment
pnpm build:prod
```

## 🔧 Code inspection

```bash
# code formatting
pnpm lint

# unit test
pnpm test
```

## Git commit specification reference

- `feat` add new functions
- `fix` Fix issues/bugs
- `perf` Optimize performance
- `style` Change the code style without affecting the running result
- `refactor` Re-factor code
- `revert` Undo changes
- `test` Test related, does not involve changes to business code
- `docs` Documentation and Annotation
- `chore` Updating dependencies/modifying scaffolding configuration, etc.
- `workflow` Work flow Improvements
- `ci` CICD
- `types` Type definition
- `wip` In development
