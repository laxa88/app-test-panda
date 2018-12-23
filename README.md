# Test App

## Goal

Write a simple React App based on provided UI mockup.

## Environment notes

The following tools were used during development:

| Environment        | Version  |
| ------------------ | -------- |
| NPM                | `6.5.0`  |
| Node               | `8.11.4` |
| Visual Studio Code | `1.23.0` |

For library versions, refer to `package.json`.

## Getting Started

1. In this folder, run `npm i` to install all dependencies

2. To start the app in development mode, run `npm run start`

## Development Notes

### Using Storybook to develop components

When writing components, it is impractical to use an existing page within the app as placeholder for work-in-progress. Storybook helps provide a sandboxed and organised environment for such a situation.

1. Write the initial component.

2. Add a story in `/stories`

3. `require` the story in `.storybook/config.js`

4. Start the Storybook server by running `npm run storybook`. The browser should automatically open with Storybook (default: `localhost:9001`), with hot-reloading.

5. Continue developing the component and checking against the result in Storybook.

### Linting

Install `ESLint` plugin for VSCode. It should detect this project's `.eslintrc.js` file's rules. You will be able to see warnings and errors when developing code.

You can also configure ESLint in VSCode settings via `CTRL + ,` / `CMD + ,`. The rules currently used by me are:

```js
"files.trimTrailingWhitespace": true,
"eslint.autoFixOnSave": true,
"eslint.enable": true,
```

### Testing

Run `npm run test` to run unit tests once. You can instead use `npm run test --watch` which will automatically run tests whenever files are changed.

### Mocking files for Jest

To mock any file, add a `__mocks__` folder adjacent to the folder being mocked, and add the folder and files with the same name as the file being mocked.

An example is `__mocks__/@fortawesome/react-fontawesome/` which mocks FontAwesomeIcon, such that actual icons are not loaded and rendered in test snapshots.

For further info: [https://jestjs.io/docs/en/manual-mocks](https://jestjs.io/docs/en/manual-mocks)
