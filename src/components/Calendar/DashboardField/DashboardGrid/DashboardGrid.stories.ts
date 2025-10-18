import { DashboardGrid } from './DashboardGrid.tsx'
import { Meta, StoryObj } from '@storybook/react-vite'

const meta: Meta<typeof DashboardGrid> = {
  component: DashboardGrid,
}

export default meta

type Story = StoryObj<typeof DashboardGrid>

export const Default: Story = {}
