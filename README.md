# Vitejs & Bootstrap starter

## Requirments

- [node.js](https://nodejs.org/en/) >= v18.12.1
- [yarn](https://yarnpkg.com/) or npm (installed with node.js)

## How it works

```sh
# Clone repository
$ git clone https://github.com/jsuradesign/vite-bootstrap.git project-name

# Jump to project directory
$ cd project-name

# Install dependencies
$ yarn install # or npm install

# Run development
$ yarn dev # or npm run dev

# Production build
$ yarn build # or npm run build
```

## Project structure

```sh
vite-bootstrap/         # → Root of your project
├── node_modules/       # → Node.js packages (never edit)
├── src
│   ├── assets/
│   │    ├── images/    # → Images
│   │    ├── js/        # → JavaScript files
│   │    └── scss/      # → Sass files
│   └── index.html
├──  .browserslistrc    # → Browsersync configuration file
├──  .gitignore         # → Git ignore configuration
├──  .nvmrc             # → Node version manager configuration (node.js version)
├──  LICENSE.md         # → License file
├── package.json        # → Node.js dependencies and scripts
├── postcss.config.js   # → PostCSS configuration
└── vite.config.js      # → ViteJS configuration
```
