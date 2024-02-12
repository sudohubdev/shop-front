# React + TypeScript + Vite

# Shop Backend API
Цей проект реалізує фронтенд частину для магазину. Це зовнішній вигляд магазину, який відображається користувачам.

## УВАГА
Ви напевно не хочете це качати. Будь ласка, перейдіть сюди щоб отримати все у купі: https://github.com/sudohubdev/shop-back.git

## Увага 2
Якщо ви хочете вносити зміни тільки в цей репозиторій, вам слід використовувати виключно VSCode з `node.js`

## Гілки проєкту
- main - гілка з останніми тестовими змінами. Саме сюди ви пушите свої зміни
- prod - гілка з останніми стабільними змінами, туди лізти тільки якщо це не завалить сервер
- будь які інші гілки використовуйте індивідуально, їх хостинг ігнорує

## Запуск
У VSCode вибрати відповідно `React` і запустити проєкт. А далі робіть що VSCode вам скаже.

## Культура GitHub
- Надавати конкретне і зрозуміле ім'я коміту
- Рекомендовано використовувати назву задачі над якою працювали
- Не пушити на гілку `prod` без дозволу або pull request
- Заборонені деструктивні зміни накшталт `git push -f` або `git reset --hard`
- Використовувати [pull request](https://github.com/sudohubdev/shop-back/pulls) для обговорення змін
- Використовувати [issues](https://github.com/sudohubdev/shop-back/issues) для обговорення проблем
- якщо щось не виходить, питати у девопсів

## 💀💀💀
Заборонені неузгоджені з DevOps зміни до наступних файлів:
- .gitignore
- .gitmodules
- .vscode і всі файли в ньому
- .csproj файли
- .esproj файли
- .sln файли
- README.md (тільки внизу можна змінювати)

Якщо ви там щось наміняли і запушили, готуйте `вазилін`

---
# Інфа для фронтендерів:

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
