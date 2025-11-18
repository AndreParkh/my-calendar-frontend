import { DashboardGridMemo } from './DashboardGrid.tsx'
import { Meta, StoryObj } from '@storybook/react-vite'

const meta: Meta<typeof DashboardGridMemo> = {
  component: DashboardGridMemo,
}

export default meta

type Story = StoryObj<typeof DashboardGridMemo>

export const Default: Story = {}
