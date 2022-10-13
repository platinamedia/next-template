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

## Использование команды `make`

По умолчанию, приложение будет запущено на 3000-ом порте, но ты можешь передать параметр PORT с любым другим значением.

```bash
make PORT=8080
```

## Запуск ДЕВ-окружения

```bash
make dev
```

или используя npm

```bash
npm run dev
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

## Использование env переменных

Модуль `src/env/client` экспортирует объект `env`, в нём находятся все переменные из `.env` файла.

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
