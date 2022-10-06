# next-template

## Установка

### [degit](https://github.com/Rich-Harris/degit)

```bash
npx degit platinamedia/next-template ./path/to/my-app
```

```bash
npm i
```

### Установка `tailwindcss`

```bash
node scripts/addTailwind.mjs
```

## Запуск ДЕВ-окружения

```bash
make dev # или npm run dev
```

## Сборка для ПРОДа

### Сборка и запуск в одной команде

```bash
make
```

### Только сборка

```bash
make build
```

### Только запуск

```bash
make run
```

## Технологии

- TypeScript;
- eslint c [eslint-config-next](https://npmjs.com/package/eslint-config-next);
- husky;
- prettier;

## [Структура](https://github.com/platinamedia/frontend_dock)

## Рекомендации

### Расширение для editorconfig

- [vscode](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
- [vim](https://github.com/editorconfig/editorconfig-vim)

## Другие комманды в `Makefile`

### Остановка запущенного контейнера

```bash
make stop
```

### Удаление контейнера и образа

```bash
make clean
```
