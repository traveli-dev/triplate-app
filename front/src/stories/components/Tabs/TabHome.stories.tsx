import { Timestamp } from 'firebase/firestore'
import { TabHome } from '@/components/Tabs'
import type { StoryObj, Meta } from '@storybook/react'

const meta: Meta<typeof TabHome> = {
  component: TabHome,
  argTypes: {
    myTriplinksData: {
      description: 'myTriplinksDataの配列'
    },
    joinTriplinksData: {
      description: 'joinTriplinksDataの配列'
    },
    favoriteTriplinksData: {
      description: 'favoriteTriplinksDataの配列'
    }
  },
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof TabHome>

export const Default: Story = {
  args: {
    myTriplinksData: [
      {
        id: 'o1PHRC1TGzdX4WAxHSZrdgCIweQ2',
        ownerId: 'C5Ja2gXGLeIXTjhWZbDiWUWe8Whd',
        title: 'テストデータ１',
        thumbnail: '/images/thumbnail_sample.jpg',
        date: [new Timestamp(1671634800, 0), new Timestamp(1671807600, 0)],
        createdAt: new Timestamp(1671634800, 0),
        updatedAt: null,
        members: [],
        tabimemo: {
          budget: null,
          items: [],
          memo: null
        },
        itineraries: {}
      },
      {
        id: 'o2PHRC1TGzdX4WAxHSZrdgCIweQ2',
        ownerId: 'C5Ja2gXGLeIXTjhWZbDiWUWe8Whd',
        title: 'テストデータ２',
        thumbnail: '/images/thumbnail_sample.jpg',
        date: [new Timestamp(1671634800, 0), new Timestamp(1671807600, 0)],
        createdAt: new Timestamp(1671634800, 0),
        updatedAt: null,
        members: [],
        tabimemo: {
          budget: null,
          items: [],
          memo: null
        },
        itineraries: {}
      }
    ],
    joinTriplinksData: [
      {
        id: 'o1PHRC1TGzdX4WAxHSZrdgCIweQ2',
        ownerId: 'C5Ja2gXGLeIXTjhWZbDiWUWe8Whd',
        title: 'テストデータ１',
        thumbnail: '/images/thumbnail_sample.jpg',
        date: [new Timestamp(1671634800, 0), new Timestamp(1671807600, 0)],
        createdAt: new Timestamp(1671634800, 0),
        updatedAt: null,
        members: [],
        tabimemo: {
          budget: null,
          items: [],
          memo: null
        },
        itineraries: {}
      }
    ],
    favoriteTriplinksData: [
      {
        id: 'o1PHRC1TGzdX4WAxHSZrdgCIweQ2',
        ownerId: 'C5Ja2gXGLeIXTjhWZbDiWUWe8Whd',
        title: 'テストデータ１',
        thumbnail: '/images/thumbnail_sample.jpg',
        date: [new Timestamp(1671634800, 0), new Timestamp(1671807600, 0)],
        createdAt: new Timestamp(1671634800, 0),
        updatedAt: null,
        members: [],
        tabimemo: {
          budget: null,
          items: [],
          memo: null
        },
        itineraries: {}
      }
    ]
  }
}

export const NoData: Story = {
  args: {
    myTriplinksData: [],
    joinTriplinksData: [],
    favoriteTriplinksData: []
  }
}
