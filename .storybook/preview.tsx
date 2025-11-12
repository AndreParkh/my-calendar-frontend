import type { Preview } from '@storybook/react-vite'
import '../src/index.css'
import { Provider } from 'react-redux'
import { createStore } from '../src/store/store'
import { i18next } from '../src/i18n/i18n'
import { I18nextProvider } from 'react-i18next'

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'dark',
          value: 'hsla(0deg 0% 14% / 100%)',
        },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <I18nextProvider i18n={i18next}>
        <Provider store={createStore()}>
          <Story />
        </Provider>
      </I18nextProvider>
    ),
  ],
}

export default preview
