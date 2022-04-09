# next-template

Opinionated Next.js template for your web applications.

## Uses

- TypeScript;
- tailwindcss;
- eslint with [eslint-config-next](https://npmjs.com/package/eslint-config-next);
- husky;
- prettier;

## File structure

All source code goes into [src](./src) directory.

- [src/components](./src/components) - React components;
  - [src/components/specific](./src/components/specific) - Big but not really reusable components;
  - [src/components/design-system](./src/components/design-system) - Reusable components;
- [src/layouts](./src/layouts) - Components, which represent page layouts [Next.js docs](https://nextjs.org/docs/basic-features/layouts);
- [src/pages](./src/pages) - Normal Next.js pages;
- [src/types](./src/types) - Reusable types;

## Dev server

```bash
yarn dev
```

## Build for production

```bash
yarn build
```
