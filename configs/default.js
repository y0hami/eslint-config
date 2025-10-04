/**
 * Base ESLint config.
 */
module.exports = {
  root: true,
  env: {
    es2022: true,
    node: true
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
    sourceType: 'module',
    ecmaVersion: 2022
  },
  plugins: [
    '@typescript-eslint',
    'import',
    'n',
    'perfectionist',
    'promise'
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:@typescript-eslint/stylistic',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:n/recommended',
    'plugin:promise/recommended'
  ],
  settings: {
    'import/resolver': {
      typescript: true
    }
  },
  rules: {
    'import/order': 'off',
    'perfectionist/sort-imports': ['error', {
      type: 'alphabetical',
      order: 'asc',
      ignoreCase: true,
      newlinesBetween: 1,
      groups: [
        [
          'builtin',
          'subpath'
        ],
        'external',
        [
          'internal',
          'side-effect'
        ],
        [
          'style',
          'side-effect-style'
        ],
        [
          'parent',
          'sibling',
          'index'
        ],
        [
          'type',
          'type-parent',
          'type-sibling',
          'type-index'
        ],
        'unknown'
      ],
      internalPattern: [
        '^~/.+',
        '^@/.+'
      ]
    }],
    'max-lines': ['error', {
      max: 250,
      skipComments: true
    }]
  }
}
