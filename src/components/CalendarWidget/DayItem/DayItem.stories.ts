import { DayItem } from './DayItem.tsx'
import { Meta, StoryObj } from '@storybook/react-vite'
import { createDate } from '@/functions/createDate.ts'

const meta: Meta<typeof DayItem> = {
  component: DayItem,
}

export default meta

type Story = StoryObj<typeof DayItem>

export const Variant1: Story = {
  args: {
    dayObj: createDate(),
  },
}

export const Variant2: Story = {
  args: {
    dayObj: createDate(),
    isOtherMonth: true,
  },
}
