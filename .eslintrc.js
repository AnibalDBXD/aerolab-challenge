module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true
        }
    },
    plugins: ["simple-import-sort"],
    settings: {
        react: {
            version: "detect"
        }
    },
    env: {
        browser: true,
        amd: true,
        node: true
    },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:jsx-a11y/recommended",
        "prettier/@typescript-eslint",
        "plugin:prettier/recommended" // Make sure this is always the last element in the array.
    ],
    rules: {
        "react/react-in-jsx-scope": "off",
        "react/jsx-sort-props": 2,
        "prettier/prettier": ["error", {}, { usePrettierrc: true }], // Use our .prettierrc file as source
        "@typescript-eslint/explicit-module-boundary-types": ["error"],
        "@typescript-eslint/no-explicit-any": ["error"],
        "@typescript-eslint/no-unused-vars": ["error"],
        "@typescript-eslint/explicit-function-return-type": [
            "error",
            {
                allowExpressions: false,
                allowTypedFunctionExpressions: true,
                allowHigherOrderFunctions: true,
                allowDirectConstAssertionInArrowFunctions: true,
                allowConciseArrowFunctionExpressionsStartingWithVoid: true
            }
        ]
    }
};
