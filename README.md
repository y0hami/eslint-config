# eslint-config-hami
My ESLint config for typescript (and react)

Based on [Standard](https://github.com/standard/standard)

---

## Install

```bash
yarn add --dev eslint-config-hami

yarn esinit
# OR for react
yarn esinit --react

yarn install
```

## React support

Change `extends` to `hami/react` in `.eslintrc.json`
```json
{
  "extends": ["hami/react"],
  "parserOptions": {
    "project": "./tsconfig.json"
  }
}
```
