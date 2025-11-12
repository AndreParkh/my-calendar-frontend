import { Dashboard } from './Dashboard.tsx'
import { Meta, StoryObj } from '@storybook/react-vite'

const meta: Meta<typeof Dashboard> = {
  component: Dashboard,
}

export default meta

type Story = StoryObj<typeof Dashboard>

export const Default: Story = {}
