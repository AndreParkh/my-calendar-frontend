import { TimeCell } from './TimeCell.tsx'
import { Meta, StoryObj } from '@storybook/react-vite'

const meta: Meta<typeof TimeCell> = {
  component: TimeCell,
}

export default meta

type Story = StoryObj<typeof TimeCell>
export const Standart: Story = {
  args: {
    children: '1:00',
  },
}
