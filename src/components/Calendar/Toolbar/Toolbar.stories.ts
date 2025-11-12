import { Toolbar } from './Toolbar.tsx'
import { Meta, StoryObj } from '@storybook/react-vite'

const meta: Meta<typeof Toolbar> = {
  component: Toolbar,
}

export default meta

type Story = StoryObj<typeof Toolbar>

export const Default: Story = {}
