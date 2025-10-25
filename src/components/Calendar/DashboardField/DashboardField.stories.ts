import { DashboardFieldMemo } from './DashboardField.tsx'
import { Meta, StoryObj } from '@storybook/react-vite'

const meta: Meta<typeof DashboardFieldMemo> = {
  component: DashboardFieldMemo,
}

export default meta

type Story = StoryObj<typeof DashboardFieldMemo>

export const Default: Story = {}
