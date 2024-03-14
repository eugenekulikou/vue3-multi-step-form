module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
    'plugin:prettier/recommended',
    'plugin:tailwindcss/recommended',
    'prettier',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: {
          max: 3,
        },
        multiline: {
          max: 1,
        },
      },
    ],
    'vue/block-lang': [
      'error',
      {
        script: {
          lang: 'ts',
        },
      },
    ],
    'vue/component-name-in-template-casing': [
      'error',
      'PascalCase',
      {
        ignores: [],
        registeredComponentsOnly: true,
      },
    ],
    'vue/component-options-name-casing': ['error'],
    'vue/custom-event-name-casing': ['error', 'kebab-case'],
    'vue/define-props-declaration': ['error'],
    'vue/new-line-between-multi-line-property': ['error'],
    'vue/next-tick-style': ['error', 'callback'],
    'vue/no-constant-condition': ['error'],
    'vue/no-ref-object-destructure': ['warn'],
    'vue/no-required-prop-with-default': ['error'],
    'vue/no-unused-properties': ['error'],
    'vue/no-unused-refs': ['error'],
    'vue/no-useless-concat': ['error'],
    'vue/no-useless-mustaches': ['error'],
    'vue/no-useless-v-bind': ['error'],
    'vue/padding-line-between-blocks': ['error'],
    'vue/padding-line-between-tags': ['error'],
    'vue/prefer-true-attribute-shorthand': ['error'],
    'vue/v-bind-style': ['error', 'shorthand'],
    'vue/v-on-style': ['error', 'shorthand'],
    'vue/valid-v-bind-sync': ['error'],
    'vue/no-multiple-template-root': ['off'],
    'vue/multi-word-component-names': ['off'],
    'tailwindcss/no-unnecessary-arbitrary-value': ['error'],
  },
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly',
  },
};
