# Nightwatch + NW example

## Usage

### Testing final app

1. Build the app for production
   ```sh
   npm run prod
   ```
2. If not on MacOS, modify the `binary` config in `nightwatch.conf.js` (for 'chrome' env) and set it to the path of final executable file built in `dist/` folder.
3. Run Nightwatch test
   ```sh
   npx nightwatch --env chrome
   ```

### Testing app during development

1. Download SDK for your system from https://nwjs.io/downloads/
2. Extract the downloaded zip file inside the root of this project.
3. Open the extracted folder and copy the path of the `chromedriver` binary.
4. Set the copied path to the `server_path` config in `nightwatch.conf.js` (for 'chrome-dev' env).
5. Run Nightwatch test
   ```sh
   npx nightwatch --env chrome-dev
   ```

