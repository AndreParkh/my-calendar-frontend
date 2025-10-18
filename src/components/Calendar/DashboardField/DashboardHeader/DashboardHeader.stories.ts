import { DashboardHeader } from './DashboardHeader.tsx'
import { Meta, StoryObj } from '@storybook/react-vite'

const meta: Meta<typeof DashboardHeader> = {
  component: DashboardHeader,
}

export default meta

type Story = StoryObj<typeof DashboardHeader>

export const Default: Story = {}
