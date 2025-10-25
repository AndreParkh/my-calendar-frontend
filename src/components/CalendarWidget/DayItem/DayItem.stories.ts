import { DayItemMemo } from './DayItem.tsx'
import { Meta, StoryObj } from '@storybook/react-vite'
import { createDate } from '@/functions/createDate.ts'

const meta: Meta<typeof DayItemMemo> = {
  component: DayItemMemo,
}

export default meta

type Story = StoryObj<typeof DayItemMemo>

export const Variant1: Story = {
  args: {
    customDate: createDate(),
  },
}

export const Variant2: Story = {
  args: {
    customDate: createDate(),
    isOtherMonth: true,
  },
}
