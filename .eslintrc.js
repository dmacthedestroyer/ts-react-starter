export default {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: ['./tsconfig.json'],
    },
    plugins: [
        '@typescript-eslint',
    ],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
    ],
    env: {
        browser: true,
        node: true,
    },
    rules: {
        'no-prototype-builtins': 'off',
        'no-unused-vars': 'off',
        'quotes': ['error', 'single', { 'allowTemplateLiterals': true }],
        'comma-dangle': ['error', 'always-multiline'],
        'react/prop-types': 'off',
        '@typescript-eslint/no-inferrable-types': 'off',
        '@typescript-eslint/no-unnecessary-condition': 'error',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-unused-vars': ['error', { 'ignoreRestSiblings': true }],
        '@typescript-eslint/strict-boolean-expressions': ['error', {
            allowString: true,
            allowNumber: false,
            allowNullableObject: true,
            allowNullableBoolean: true,
            allowNullableString: true,
            allowNullableNumber: false,
            allowAny: false,
        }],
    },
}
