import next from 'eslint-config-next'
import nextTypescript from 'eslint-config-next/typescript'
import prettier from 'eslint-config-prettier'

const config = [
  ...next,
  ...nextTypescript,
  prettier,
  {
    rules: {
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'react/display-name': 'off'
    }
  }
]

export default config
