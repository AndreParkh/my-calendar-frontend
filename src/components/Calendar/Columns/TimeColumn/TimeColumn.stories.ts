import { TimeColumn } from './TimeColumn.tsx'
import { Meta, StoryObj } from '@storybook/react-vite'
import { QTY_HOURS } from '@/constants/constants.ts'

const meta: Meta<typeof TimeColumn> = {
  component: TimeColumn,
}

export default meta

type Story = StoryObj<typeof TimeColumn>

const timeList = new Array(QTY_HOURS)
  .fill('')
  .map((_, idx) => `${('0' + idx).slice(-2)}:00`)

export const Standart: Story = {
  args: {
    timeList,
  },
}
