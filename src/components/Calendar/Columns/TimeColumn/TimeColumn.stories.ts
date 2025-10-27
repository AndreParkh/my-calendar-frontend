import { TimeColumnMemo } from './TimeColumn.tsx'
import { Meta, StoryObj } from '@storybook/react-vite'
import { QTY_HOURS } from '@/constants/constants.ts'
import { createTimeList } from '@/functions/createTimeList.ts'

const meta: Meta<typeof TimeColumnMemo> = {
  component: TimeColumnMemo,
}

export default meta

type Story = StoryObj<typeof TimeColumnMemo>

const timeList = createTimeList(QTY_HOURS)

export const Default: Story = {
  args: {
    timeList,
  },
}
