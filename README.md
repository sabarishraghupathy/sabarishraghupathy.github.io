#### Updating Site

- Make changes within src folder
- Build and test in localhost
- Push all changes to github

#### npm Scripts

- `npm run build` builds the project - this builds assets, HTML, JS, and CSS into `dist`
- `npm run build:assets` copies the files in the `src/assets/` directory into `dist/assets`
- `npm run build:pug` compiles the Pug located in the `src/pug/` directory into `.` root folder
- `npm run build:scripts` brings the `src/js/scripts.js` file into `dist/js`
- `npm run build:scss` compiles the SCSS files located in the `src/scss/` directory into `dist/css`
- `npm run clean` deletes the `dist` directory and `index.html` file to prepare for rebuilding the project
- `npm run start:debug` runs the project in debug mode
- `npm start` or `npm run start` runs the project, launches a live preview in your default browser, and watches for changes made to files in `src`
