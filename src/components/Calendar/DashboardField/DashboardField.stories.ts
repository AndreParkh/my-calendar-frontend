import { DashboardField } from './DashboardField.tsx'
import { Meta, StoryObj } from '@storybook/react-vite'

const meta: Meta<typeof DashboardField> = {
  component: DashboardField,
}

export default meta

type Story = StoryObj<typeof DashboardField>

export const Default: Story = {}
