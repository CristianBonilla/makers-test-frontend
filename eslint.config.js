import globals from 'globals';
import tseslint from 'typescript-eslint';
import js from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import stylisticTs from '@stylistic/eslint-plugin-ts';
import parser from '@typescript-eslint/parser';
import importTs from 'eslint-plugin-import';
import node from 'eslint-plugin-n';
import promise from 'eslint-plugin-promise';
import react from 'eslint-plugin-react';
import reactX from 'eslint-plugin-react-x';
import reactDom from 'eslint-plugin-react-dom';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default tseslint.config(
  {
    ignores: [
      'dist/*',
      'build/*',
      '!build/index.js'
    ]
  },
  {
    extends: [
      js.configs.recommended,
      importTs.flatConfigs.typescript,
      promise.configs['flat/recommended'],
      node.configs['flat/recommended'],
      ...tseslint.configs.recommended,
      tseslint.configs.recommendedTypeChecked
    ],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: {
          jsx: true
        },
        sourceType: 'module',
        project: './tsconfig.json',
        projectService: true,
        tsconfigRootDir: import.meta.dirname
      }
    },
    plugins: {
      'import': importTs,
      'n': node,
      '@stylistic': stylistic,
      '@stylistic/ts': stylisticTs,
      react,
      'react-x': reactX,
      'react-dom': reactDom,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh
    },
    rules: {
      ...react.configs.recommended.rules,
      ...reactX.configs['recommended-typescript'].rules,
      ...reactDom.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'n/no-missing-import': ['off'],
      'import/no-deprecated': 'warn',
      'import/no-duplicates': 'error',
      'import/order': 'warn',
      '@stylistic/array-bracket-spacing': [
        'off',
        'always',
        {
          singleValue: false,
          objectsInArrays: false,
          arraysInArrays: false
        }
      ],
      '@stylistic/ts/indent': ['off', 2],
      '@stylistic/ts/quotes': ['warn', 'single'],
      '@stylistic/ts/semi': ['warn', 'always'],
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_'
        }
      ],
      "@typescript-eslint/no-misused-promises": [
        "error",
        {
          "checksVoidReturn": {
            "arguments": false,
            "attributes": false
          }
        }
      ],
      '@typescript-eslint/array-type': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-member-accessibility': [
        'warn',
        {
          accessibility: 'explicit',
          overrides: {
            accessors: 'explicit',
            constructors: 'off',
            methods: 'explicit',
            properties: 'explicit',
            parameterProperties: 'explicit'
          }
        }
      ],
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'interface',
          format: ['PascalCase'],
          custom: {
            regex: '^[A-Z]',
            match: true
          }
        }
      ],
      '@typescript-eslint/member-ordering': [
        'warn',
        {
          default: [
            'static-field',
            'instance-field',
            'constructor',
            'static-method',
            'instance-method'
          ]
        }
      ],
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-inferrable-types': 'warn',
      '@typescript-eslint/no-non-null-assertion': 'warn',
      '@typescript-eslint/unbound-method': 'off',
      '@typescript-eslint/no-floating-promises': 'off',
      'arrow-parens': ['off', 'as-needed'],
      'comma-dangle': [
        'warn',
        {
          objects: 'never',
          arrays: 'never',
          functions: 'never'
        }
      ],
      curly: 'off',
      'eol-last': 'off',
      indent: 'off',
      'jsdoc/no-types': 'off',
      'max-classes-per-file': 'off',
      'max-len': [
        'warn',
        {
          code: 170
        }
      ],
      'no-console': [
        'warn',
        {
          allow: [
            'log',
            'warn',
            'dir',
            'timeLog',
            'assert',
            'clear',
            'count',
            'countReset',
            'group',
            'groupEnd',
            'table',
            'dirxml',
            'error',
            'groupCollapsed',
            'Console',
            'profile',
            'profileEnd',
            'timeStamp',
            'context'
          ]
        }
      ],
      'no-empty': 'off',
      'no-fallthrough': 'warn',
      'no-mixed-operators': 'off',
      'no-multiple-empty-lines': 'off',
      'no-shadow': [
        'off',
        {
          hoist: 'all'
        }
      ],
      'no-trailing-spaces': 'off',
      'no-unused-vars': 'off',
      'no-unused-expressions': 'off',
      'operator-linebreak': ['warn', 'after'],
      'quote-props': ['warn', 'consistent-as-needed'],
      semi: [0, 'always'],
      'space-before-function-paren': 'off',
      'template-curly-spacing': ['warn', 'always']
    },
    settings: {
      react: {
        version: 'detect'
      }
    }
  }
);
