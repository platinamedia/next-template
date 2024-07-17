# next-template

## Создание нового проекта на основе этого шаблона

```bash
npx degit platinamedia/next-template ./my-app
```

#### [degit](https://github.com/Rich-Harris/degit)

### [Build](./docs/build.md)

### [Скрипты](./docs/scripts.md)

### [Структура](https://github.com/platinamedia/frontend_dock)

## Использование env переменных

Модуль `src/env/client` экспортирует объект `env`, в нём находятся все переменные из `.env` файла.

### Размеры экранов

- `1500 - 1200px` для 2k мониторов
- `1199 - 1025px` для средних мониторов
- `1024 - 768px` для планшетной версии
- `767 - 320px` для телефонов
