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

### Mocking files for Jest

To mock any file, add a `__mocks__` folder adjacent to the folder being mocked, and add the folder and files with the same name as the file being mocked.

An example is `__mocks__/@fortawesome/react-fontawesome/` which mocks FontAwesomeIcon, such that actual icons are not loaded and rendered in test snapshots.

For further info: [https://jestjs.io/docs/en/manual-mocks](https://jestjs.io/docs/en/manual-mocks)
