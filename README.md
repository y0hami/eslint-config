# eslint-config-hami
My ESLint config for typescript, react and nextjs

Based on [Standard](https://github.com/standard/standard)

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

---

## Install

```bash
bun add --dev eslint-config-hami
```

```bash
bunx esinit --config <config>
```
Configs: ts, react, nextjs


## Other Configs
#### React Config

Change `extends` to `hami/react` in `.eslintrc.json`
```json
{
  "extends": ["hami/react"],
  "parserOptions": {
    "project": "./tsconfig.json"
  }
}
```

#### NextJS Config

Change `extends` to `hami/nextjs` in `.eslintrc.json`
```json
{
  "extends": ["hami/nextjs"],
  "parserOptions": {
    "project": "./tsconfig.json"
  }
}
```
