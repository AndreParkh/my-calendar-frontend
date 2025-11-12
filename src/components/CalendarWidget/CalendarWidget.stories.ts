import { CalendarWidget } from './CalendarWidget.tsx'
import { Meta, StoryObj } from '@storybook/react-vite'

const meta: Meta<typeof CalendarWidget> = {
  component: CalendarWidget,
}

export default meta

type Story = StoryObj<typeof CalendarWidget>

export const Default: Story = {}
