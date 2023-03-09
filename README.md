# React test

## Live Preview

[@ Netlify (git push triggered deployment)](https://incandescent-gecko-79b03b.netlify.app/)

## How to run the project

### Prerequisites

- npm

### Steps

- Open terminal Go to project directory.
- Install all dependancies using command `npm install`
- Run project using command `npm start`
- Done

### Run script

```
git clone git@github.com:mayurkathale/react-user-test.git user-test
cd user-test
echo "NEXT_PUBLIC_API_URL=https://reqres.in/api/users?page=" >> .env.local
npm install
npm run dev
```

## Available Scripts

`npm run dev`: Run application in Dev mode.
`npm run start`: Run application in Dev mode.
`npm run build`: Creates a build for deployment.
`npm run lint`: checks code linting.
`npm run test`: Runs unit tests in jest.
`npm run check-types`: Runs type check in code.
`npm run check-format`: Check code formatting using prettier.
`npm run check-lint`: Check code linting using ESLint.
`npm run check:all`: Checks type, code formatting, linting, unit tests.
`npm run fix:all`: Fixes type, code formatting, linting, unit tests..
`npm run prepare`: Run ESLint in the project.

## Screens

Prototype:
![localImage](./public/1.png)

Implemented:
![localImage](./public/2.png)

## Approach

- Initialised project boilerplate using _Create react app_.
- Installed and configured libraries like eslint, preetier, jest, husky in order to maintain code quality following coding standards.
- Wrote husky pre-commit script which does type checking, checks code format, runs unit tests before committing code to git.
- Created components according to requirements with Sass module to provide css.
- Assuming large website, components are divided small and kept those lean writing less logic or css classnames. Idea of using ">", "&", ":nth-child", do not need to mentioned class names on each of the element, JSX code can be cleaner with this approach.
- Created React state stores using Redux.
- Added <Loading /> component which gets loaded dynamically using _next/dynamic_.
- Used next/images for lazy image loading.
- Using memo, useMemo function achieved performance improvement. useCallback can be used on the function which are passed as prop to child components.
- Selected to use Grid css layout as seems perfect fit for the given UI prototype. Responsive UI achieved using sass mixins.
