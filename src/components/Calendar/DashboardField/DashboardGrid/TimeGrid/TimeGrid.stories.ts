import { TimeGrid } from './TimeGrid.tsx'
import { Meta, StoryObj } from '@storybook/react-vite'

const meta: Meta<typeof TimeGrid> = {
  component: TimeGrid,
}

export default meta

type Story = StoryObj<typeof TimeGrid>

export const Default: Story = {}
