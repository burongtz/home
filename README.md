# Portfolio - burongtz-home

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deploy to github

```bash
# Remove dist from .gitignore file.
yarn build
npx next export -o dist
# Commit changes in dist/.
git subtree push --prefix dist origin gh-pages
```
