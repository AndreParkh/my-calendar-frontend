import { Avatar } from './Avatar.tsx'
import { Meta, StoryObj } from '@storybook/react-vite'

const meta: Meta<typeof Avatar> = {
  component: Avatar,
}

export default meta

type Story = StoryObj<typeof Avatar>
export const WorkEvent: Story = {
  args: {},
}
