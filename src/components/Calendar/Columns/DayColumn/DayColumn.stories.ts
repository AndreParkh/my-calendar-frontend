import { DayColumn } from './DayColumn.tsx'
import { Meta, StoryObj } from '@storybook/react-vite'

const meta: Meta<typeof DayColumn> = {
  component: DayColumn,
}

export default meta

type Story = StoryObj<typeof DayColumn>

export const Default: Story = {
  args: {
    date: new Date(),
  },
}
