import { WeekDashboard } from './WeekDashboard.tsx'
import { Meta, StoryObj } from '@storybook/react-vite'

const meta: Meta<typeof WeekDashboard> = {
  component: WeekDashboard,
}

export default meta

type Story = StoryObj<typeof WeekDashboard>

export const Default: Story = {}
