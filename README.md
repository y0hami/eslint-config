# eslint-config-hami

My eslint config :)


## Install
> NOTE: Must setup [GitHub package registry](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry)

```bash
yarn add --dev @hammy2899/eslint-config-hami
yarn setuplint
yarn
```

#### React support

Change `extends` to `hami/react` in `.eslintrc.json`
```json
{
  "extends": ["hami/react"],
  "parserOptions": {
    "project": "./tsconfig.json"
  }
}
```
