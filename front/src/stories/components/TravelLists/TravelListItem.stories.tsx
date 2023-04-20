import { Meta, StoryObj } from '@storybook/react'
import { TravelListItem } from '@/components/travelLists'

const meta: Meta<typeof TravelListItem> = {
  component: TravelListItem,
  argTypes: {
    icon: {
      description: 'アイコンのタイプが入ります'
    },
    title: {
      description: 'タイトルが入ります'
    },
    date: {
      description: '時間が入ります'
    },
    memo: {
      description: 'テキストが入ります'
    }
  },
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof TravelListItem>

export const Default: Story = {
  args: {
    icon: 'link',
    title: 'タイトル',
    date: '00:00',
    memo: 'テキストが入ります'
  },
  parameters: {
    viewport: {
      defaultViewport: 'pc'
    }
  }
}

export const WithoutDetails: Story = {
  args: {
    icon: 'link',
    title: 'タイトル'
  },
  parameters: {
    viewport: {
      defaultViewport: 'pc'
    }
  }
}
