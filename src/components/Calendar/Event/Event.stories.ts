import { Event } from './Event'
import { Meta, StoryObj } from '@storybook/react-vite'

const meta: Meta<typeof Event> = {
  component: Event,
}

export default meta

type Story = StoryObj<typeof Event>
export const WorkEvent: Story = {
  args: {
    type: 'work',
    title: 'Совещание',
    description: '',
  },
}

export const PersonalEvent: Story = {
  args: {
    type: 'personal',
    title: 'Поход в кино',
    description: 'На фильм “Пираты карибского моря”',
  },
}

export const FamilyEvent: Story = {
  args: {
    type: 'family',
    title: 'Запись на стрижку',
    description: '',
  },
}
