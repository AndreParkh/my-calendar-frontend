import type { Preview } from '@storybook/react-vite'
import '../src/index.css'
import { Provider } from 'react-redux'
import { createStore } from '../src/store/store'

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
      <Provider store={createStore()}>
        <Story />
      </Provider>
    ),
  ],
}

export default preview
