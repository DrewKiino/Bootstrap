# Bootstrap API

This is a starter project for bootstrapping API using NodeJS as the server stack.

## Recommended Tooling

[Webstorm](https://www.jetbrains.com/webstorm/) - IDE for Javascript 

## Prerequisites

- `npm` command line is installed for dependency management

## Usage

1. clone then open up the project
2. in terminal run `make bootstrap`; this runs a command in the Makefile that runs these commands under the hood:
   ```
   npm install -> installs all the node dependencies
   npm run build -> runs the babel pre-compiler
   npm run dev -> starts the server
   ```
   
## Notes
- the pre-compiled target is the `src` directory which creates a `dist` that we can run
our production environment from.
- `npm run dev` runs the `index.js` file from `src` while `npm start` runs `index.js` from `dist`
- make sure to replace the the project name `api` to your project name in the `package.json


