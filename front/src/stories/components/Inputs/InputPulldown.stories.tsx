import { InputPulldown } from '@/components/Inputs'
import type { StoryObj, Meta } from '@storybook/react'

const meta: Meta<typeof InputPulldown> = {
  component: InputPulldown,
  argTypes: {
    placeholder: {
      description: 'placeholder'
    },
    options: {
      description: 'idとnameの配列 nameが表示されidで選択'
    }
  },
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof InputPulldown>

export const Default: Story = {
  args: {
    placeholder: 'たびを選択',
    options: [
      { name: 'かだといそのうら', id: '9bcecdd8-fed9-4d72-8a40-b54c7b9ec05b' },
      {
        name: '和歌山市ラーメン巡り',
        id: 'b533283c-adde-4107-aa0a-943ddccb5278'
      },
      { name: '神社巡り', id: 'b21323a4-05f8-42db-9ce7-a2f29946595f' },
      { name: '海遊館', id: 'a0bf63a0-0367-11ee-be56-0242ac120002' }
    ]
  },
  parameters: {
    backgrounds: {
      default: 'white'
    }
  }
}
