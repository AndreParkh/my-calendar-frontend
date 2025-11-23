import { DayItemMemo } from './DayItem.tsx'
import { Meta, StoryObj } from '@storybook/react-vite'
import { useCustomDate } from '@/hooks/useCustomDate.ts'

const meta: Meta<typeof DayItemMemo> = {
  component: DayItemMemo,
}

export default meta

const { createDate } = useCustomDate()

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
