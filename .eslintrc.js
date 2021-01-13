module.exports = {
    env: {
        es6: true,
        node: true,
        jest: true
    },
    plugins: [
        "import",
        "json",
        "node",
        "unicorn"
    ],
    settings: {
        "import/resolver": {
            node: {
                extensions: [
                    ".js",
                    ".jsx",
                    ".json",
                    ".ts",
                    ".tsx"
                ]
            }
        }
    },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:json/recommended",
        "plugin:unicorn/recommended"
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        sourceType: "module"
    },
    rules: {
        "indent": [ "error", 4 ],
        "quotes": [ "error", "double" ],
        "semi": [ "error" ],
        "array-bracket-spacing": [ "error", "always", {
            singleValue: true,
            arraysInArrays: false,
            objectsInArrays: false
        }],
        "array-bracket-newline": [ "error", "consistent" ],
        "array-element-newline": [ "error", "consistent" ],
        "arrow-body-style": [ "error", "as-needed" ],
        "arrow-parens": [ "error", "as-needed", {
            requireForBlockBody: true
        }],
        "block-spacing": "error",
        "brace-style": [ "error", "1tbs", {
            allowSingleLine: true
        }],
        "comma-dangle": [ "error", "never" ],
        "comma-spacing": [ "error", {
            before: false,
            after: true
        }],
        "comma-style": [ "error", "last" ],
        "computed-property-spacing": [ "error", "never", {
            enforceForClassMembers: true
        }],
        "constructor-super": "error",
        "curly": [ "error" ],
        "default-case-last": "error",
        "default-param-last": [ "error" ],
        "dot-notation": [ "error", {
            allowKeywords: false
        }],
        "eol-last": [ "error", "always" ],
        "for-direction": "error",
        "func-call-spacing": [ "error", "never" ],
        "func-style": [ "error", "expression" ],
        "function-paren-newline": [ "error", "multiline" ],
        "implicit-arrow-linebreak": [ "error", "beside" ],
        "key-spacing": [ "error", {
            mode: "strict"
        }],
        "no-confusing-arrow": [ "error", {
            allowParens: true
        }],
        "no-nested-ternaly": "off",
        "no-process-exit": "off",
        "operator-linebreak": "error",
        "padding-line-between-statements": [ "error", {
            blankLine: "always",
            prev: "*",
            next: "return"
        }, {
            blankLine: "always",
            prev: [
                "const",
                "let",
                "var"
            ],
            next: [
                "const",
                "let",
                "var"
            ]
        }, {
            blankLine: "always",
            prev: "directive",
            next: "*"
        }, {
            blankLine: "always",
            prev: [
                "case",
                "default"
            ],
            next: "*"
        }],
        "prefer-arrow-callback": [ "error", {
            allowNamedFunctions: true
        }],
        "require-await": "error",
        "require-yield": "error",
        "rest-spread-spacing": [ "error", "never" ],
        "import/order": "error",
        "unicorn/no-process-exit": "off"
    }
};
