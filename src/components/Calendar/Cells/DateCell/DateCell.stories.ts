import { DateCell } from './DateCell.tsx'
import { Meta, StoryObj } from '@storybook/react-vite'

const meta: Meta<typeof DateCell> = {
  component: DateCell,
}

export default meta

type Story = StoryObj<typeof DateCell>
const date = new Date()

export const Header: Story = {
  args: {
    date: date,
  },
}
