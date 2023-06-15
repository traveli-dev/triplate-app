import { TabDaysWithTriplink } from '@/components/Tabs'
import { TravelListItemType } from '@/components/Tabs/TabDaysWithTriplink'
import type { StoryObj, Meta } from '@storybook/react'

const meta: Meta<typeof TabDaysWithTriplink> = {
  component: TabDaysWithTriplink,
  argTypes: {
    triplinks: {
      description: 'triplinkデータの配列が入ります'
    }
  },
  tags: ['autodocs']
}

export default meta

const items: TravelListItemType[] = [
  { icon: 'map', title: 'タイトル１', date: '18:00', memo: 'memomemo' },
  { icon: 'link', title: 'タイトル２', date: '18:00', memo: '' },
  { icon: 'ledger', title: 'タイトル３', date: '', memo: 'memomemo' },
  { icon: 'map', title: 'タイトル４', date: '', memo: '' }
]

type Story = StoryObj<typeof TabDaysWithTriplink>
export const Default: Story = {
  args: {
    triplinks: [
      { day: 1, name: 'aaa', linkList: items },
      { day: 2, name: 'bbb', linkList: items },
      { day: 3, name: 'ccc', linkList: items },
      { day: 4, name: 'ddd', linkList: items },
      { day: 5, name: 'eee', linkList: items }
    ]
  }
}
