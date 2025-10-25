import { DashboardHeaderMemo } from './DashboardHeader.tsx'
import { Meta, StoryObj } from '@storybook/react-vite'

const meta: Meta<typeof DashboardHeaderMemo> = {
  component: DashboardHeaderMemo,
}

export default meta

type Story = StoryObj<typeof DashboardHeaderMemo>

export const Default: Story = {}
