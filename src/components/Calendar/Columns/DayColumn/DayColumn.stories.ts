import { DayColumnMemo } from './DayColumn.tsx'
import { Meta, StoryObj } from '@storybook/react-vite'

const meta: Meta<typeof DayColumnMemo> = {
  component: DayColumnMemo,
}

export default meta

type Story = StoryObj<typeof DayColumnMemo>

export const Default: Story = {
  args: {
    date: new Date(),
  },
}
