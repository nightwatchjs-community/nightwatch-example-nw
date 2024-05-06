# Nightwatch + NW example

## Usage

### Testing final app

1. Install the dependencies
   ```sh
   npm i
   ```
2. Build the app for production
   ```sh
   npm run prod
   ```
3. If not on MacOS, modify the `binary` config in `nightwatch.conf.js` (for 'chrome' env) and set it to the path of final executable file built in `dist/` folder.
4. Run Nightwatch test
   ```sh
   npx nightwatch --env chrome
   ```

### Testing app during development

1. Install the dependencies
   ```sh
   npm i
   ```
2. Download SDK for your system from https://nwjs.io/downloads/
3. Extract the downloaded zip file inside the root of this project.
4. Open the extracted folder and copy the path of the `chromedriver` binary.
5. Set the copied path to the `server_path` config in `nightwatch.conf.js` (for 'chrome-dev' env).
6. Run Nightwatch test
   ```sh
   npx nightwatch --env chrome-dev
   ```

