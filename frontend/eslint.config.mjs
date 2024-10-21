import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import pluginImport from 'eslint-plugin-import';
import pluginUnicorn from 'eslint-plugin-unicorn';
import pluginCypress from 'eslint-plugin-cypress';
import simpleImportSort from 'eslint-plugin-simple-import-sort';

export default [
    // Specify the files to apply ESLint rules to
    {
        files: ['**/*.{js,mjs,cjs,jsx}'],
        languageOptions: {
            ecmaVersion: 2021,
            sourceType: 'module',
            globals: globals.browser,
        },
        plugins: {
            react: pluginReact,
            'react-hooks': pluginReactHooks,
            import: pluginImport,
            unicorn: pluginUnicorn,
            cypress: pluginCypress,
            'simple-import-sort': simpleImportSort,
        },
        rules: {
            ...pluginJs.configs.recommended.rules, // Apply ESLint recommended rules
            ...pluginReact.configs.flat.recommended.rules, // React recommended rules
            ...pluginReactHooks.configs.recommended.rules, // React Hooks recommended rules
            ...pluginImport.configs.recommended.rules, // Import recommended rules
            ...pluginUnicorn.configs.recommended.rules, // Unicorn recommended rules
            ...pluginCypress.configs.recommended.rules, // Cypress recommended rules

            // Custom rules
            'unicorn/filename-case': [
                'error',
                {
                    cases: {
                        camelCase: true,
                        pascalCase: true,
                    },
                },
            ],
            'simple-import-sort/exports': 'error',
            'simple-import-sort/imports': 'error',
            'import/namespace': [2, { allowComputed: true }],
            'import/first': 'error',
            'import/newline-after-import': 'error',
            'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: false }],
        },
    },

    // Override for special files (config files)
    {
        files: ['*rc.js', '*.config.js'],
        rules: {
            'unicorn/prefer-module': 'off',
            'unicorn/filename-case': 'off',
            'no-unused-vars': ['error'],
        },
    },
];
