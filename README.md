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

## Recommendations

### Update [tailwind.config.js](./tailwind.config.js)

Add settings needed for your design.

### Create `actions` directory

I suggest you create separate `actions` directory under [src/actions](./src/actions) and store there functions that represent different actions users of your application can do.

For example you're building To-Do application, so you actions can be:

- createTask({ text: "Conquer Poland" });
- completeTask(taskId);
- removeTask(taskId);

With that, you can call one of these functions from any part of application and not thinking about what API route you should call for that, what data it takes, etc.

### Regularly update [React](https://npmjs.com/package/react), [ReactDOM](https://npmjs.com/package/react-dom) and [Next.js](https://npmjs.com/package/next)

Please, always install latest versions when possible.

### Add database using [prisma](https://prisma.io)

#### Install [prisma](https://npmjs.com/package/prisma) and [@prisma/client](https://npmjs.com/package/@prisma/client)

NOTE: `prisma` package is only needed in development, but `@prisma/client` will be needed in production as well

```bash
yarn add -D prisma
yarn add @prisma/client
```

#### Initialize prisma

```bash
yarn prisma init
```

#### Follow instructions

If you need, here is [docs](https://www.prisma.io/docs/getting-started/setup-prisma/add-to-existing-project)

If you don't like any of my recommendations, feel free to ignore them and remove from README.
