import { Event } from './Event'
import { Meta, StoryObj } from '@storybook/react-vite'
import {
  EVENT_FAMILY,
  EVENT_PERSONAL,
  EVENT_WORK,
} from '@/constants/constants.ts'
import {
  IEventResponse,
  IShortUserInfo,
} from '@/interfaces/EventResponse.interface.ts'

const meta: Meta<typeof Event> = {
  component: Event,
}

export default meta

const creator: IShortUserInfo = {
  id: 1,
  firstName: 'Иван',
  lastName: 'Иванов',
  avatarUrl: `https://avatar.iran.liara.run/username?username=Иван+Иванов`,
}

const workEvent: IEventResponse = {
  id: 1,
  title: 'Совещание',
  description: '',
  startTime: new Date(2025, 9, 30, 9, 0).toISOString(),
  endTime: new Date(2025, 9, 30, 10, 0).toISOString(),
  isRepeating: false,
  createdBy: creator,
  createdAt: new Date(2025, 9, 29, 10, 0).toISOString(),
  repeatRule: '',
  participants: [creator],
}

const personalEvent: IEventResponse = {
  id: 2,
  title: 'Запись на стрижку',
  description: '',
  startTime: new Date(2025, 9, 30, 16, 0).toISOString(),
  endTime: new Date(2025, 9, 30, 17, 30).toISOString(),
  isRepeating: false,
  createdBy: creator,
  createdAt: new Date(2025, 9, 29, 10, 0).toISOString(),
  repeatRule: '',
  participants: [creator],
}

const familyEvent: IEventResponse = {
  id: 1,
  title: 'Поход в кино',
  description: '',
  startTime: new Date(2025, 9, 30, 1, 0).toISOString(),
  endTime: new Date(2025, 9, 30, 2, 0).toISOString(),
  isRepeating: false,
  createdBy: creator,
  createdAt: new Date(2025, 9, 29, 10, 0).toISOString(),
  repeatRule: '',
  participants: [creator],
}

type Story = StoryObj<typeof Event>
export const WorkEvent: Story = {
  args: {
    event: workEvent,
    type: EVENT_WORK,
  },
}

export const PersonalEvent: Story = {
  args: {
    event: personalEvent,
    type: EVENT_PERSONAL,
  },
}

export const FamilyEvent: Story = {
  args: {
    event: familyEvent,
    type: EVENT_FAMILY,
  },
}
