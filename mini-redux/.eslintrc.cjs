module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'no-unused-vars': ['error', { varsIgnorePattern: 'Taro|wx' }],
    'no-mixed-spaces-and-tabs': 2, // 禁止空格和 tab 的混合缩进
    'no-debugger': 2, //禁止有debugger
    'space-infix-ops': 2, // 要求操作符周围有空格
    'space-before-blocks': 2, // 要求语句块之前有空格
    'jsx-quotes': 'off', // JSX属性不使用双引号
    'import/first': 0, // 消除绝对路径必须要在相对路径前引入的问题
  },
  indent: ['error', 2, { SwitchCase: 1 }], // 缩进使用两个空格
}
