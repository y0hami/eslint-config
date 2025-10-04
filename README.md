# eslint-config-hami
My ESLint config for typescript, react and nextjs

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
