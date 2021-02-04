module.exports = {
    extends: ['eslint:recommended', 'prettier/react', 'plugin:react/recommended', 'plugin:prettier/recommended'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    plugins: ['react', 'react-hooks'],
    rules: {
        'no-debugger': 0,
        'prettier/prettier': 2,
        'no-useless-catch': 0,
        'react-hooks/rules-of-hooks': 2,
        'react-hooks/exhaustive-deps': 2,
        'react/prop-types': 0,
    },
    globals: {
        localStorage: true,
        fetch: true,
        console: true,
        document: true,
    },
};
