import { TimeTracker } from './TimeTracker.tsx'
import { Meta, StoryObj } from '@storybook/react-vite'

const meta: Meta<typeof TimeTracker> = {
  component: TimeTracker,
}

export default meta

type Story = StoryObj<typeof TimeTracker>

export const Default: Story = {}
