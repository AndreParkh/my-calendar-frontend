import { DayColumnMemo } from './DayColumn.tsx'
import { Meta, StoryObj } from '@storybook/react-vite'
import { IEventResponse } from '@/interfaces/EventResponse.interface.ts'

const meta: Meta<typeof DayColumnMemo> = {
  component: DayColumnMemo,
}

export default meta

type Story = StoryObj<typeof DayColumnMemo>

export const Default: Story = {}

const workEvent: IEventResponse = {
  id: 1,
  title: 'Совещание',
  description: '',
  startTime: new Date(2025, 9, 30, 2, 0),
  endTime: new Date(2025, 9, 30, 3, 0),
  isRepeating: false,
  createdBy: 1,
  createdAt: new Date(2025, 9, 29, 10, 0),
  repeatRule: '',
}

export const WithEvent: Story = {
  args: {
    events: [workEvent],
  },
}
