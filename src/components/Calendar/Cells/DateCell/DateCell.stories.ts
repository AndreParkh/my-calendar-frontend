import { DateCellMemo } from './DateCell.tsx'
import { Meta, StoryObj } from '@storybook/react-vite'

const meta: Meta<typeof DateCellMemo> = {
  component: DateCellMemo,
}

export default meta

type Story = StoryObj<typeof DateCellMemo>
const date = new Date()

export const Header: Story = {
  args: {
    date: date,
  },
}
