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
npx next export -o dist
# Remove dist from .gitignore file.
# Commit changes in dist/.
git subtree push --prefix dist origin gh-pages
```
