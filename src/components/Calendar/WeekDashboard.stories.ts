import { WeekDashboard } from './WeekDashboard.tsx'
import { Meta, StoryObj } from '@storybook/react-vite'

const meta: Meta<typeof WeekDashboard> = {
  component: WeekDashboard,
}

export default meta

type Story = StoryObj<typeof WeekDashboard>

const now = new Date()

export const PreviousWeek: Story = {
  args: {
    date: new Date(now.getFullYear(), now.getMonth(), now.getDate() - 7),
  },
}

export const CurrentWeek: Story = {
  args: {
    date: now,
  },
}

export const NextWeek: Story = {
  args: {
    date: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 7),
  },
}
