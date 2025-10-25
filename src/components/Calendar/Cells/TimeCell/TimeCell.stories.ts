import { TimeCellMemo } from './TimeCell.tsx'
import { Meta, StoryObj } from '@storybook/react-vite'

const meta: Meta<typeof TimeCellMemo> = {
  component: TimeCellMemo,
}

export default meta

type Story = StoryObj<typeof TimeCellMemo>
export const Default: Story = {
  args: {
    children: '1:00',
  },
}
