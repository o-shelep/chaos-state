import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';

export default [
    { files: ['**/*.{jsx}'] },
    {
        languageOptions: { globals: globals.browser },
        rules: {
            'no-unused-vars': 'on',
            quotes: ['off', 'double'],
        },
    },
    pluginJs.configs.recommended,
    pluginReact.configs.flat.recommended,
];
