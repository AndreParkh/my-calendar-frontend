import { HourCell } from './HourCell.tsx'
import { Meta, StoryObj } from '@storybook/react-vite'

const meta: Meta<typeof HourCell> = {
  component: HourCell,
}

export default meta

type Story = StoryObj<typeof HourCell>
export const Standart: Story = {}
