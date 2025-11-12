import { Button } from './Button'
import { Meta, StoryObj } from '@storybook/react-vite'

const meta: Meta<typeof Button> = {
  component: Button,
}

export default meta

type Story = StoryObj<typeof Button>

export const MediumBlue: Story = {
  args: {
    children: 'Кнопка',
    color: 'blue',
    size: 'medium',
  },
}

export const MediumGray: Story = {
  args: {
    children: 'Кнопка',
    color: 'gray',
    size: 'medium',
  },
}

export const MediumBlack: Story = {
  args: {
    children: 'Кнопка',
    color: 'black',
    size: 'medium',
  },
}

export const SmallTransparent: Story = {
  args: {
    children: 'Кнопка',
    color: 'transparent',
    size: 'small',
  },
}
