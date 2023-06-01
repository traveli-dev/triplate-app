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
        id: "o1PHRC1TGzdX4WAxHSZrdgCIweQ2",
        ownerId: "C5Ja2gXGLeIXTjhWZbDiWUWe8Whd",
        title: "テストデータ１",
        thumbnail:  "/images/thumbnail_sample.jpg",
        date: [
          "0000.00.00",
          "0000.00.01"
        ],
      },
      {
        id: "o2PHRC1TGzdX4WAxHSZrdgCIweQ2",
        ownerId: "C5Ja2gXGLeIXTjhWZbDiWUWe8Whd",
        title: "テストデータ２",
        thumbnail:  "/images/thumbnail_sample.jpg",
        date: [
          "0000.00.00",
          "0000.00.01"
        ],
      }
    ],
    joinTriplinksData: [
      {
        id: "o1PHRC1TGzdX4WAxHSZrdgCIweQ2",
        ownerId: "C5Ja2gXGLeIXTjhWZbDiWUWe8Whd",
        title: "テストデータ１",
        thumbnail:  "/images/thumbnail_sample.jpg",
        date: [
          "0000.00.00",
          "0000.00.01"
        ],
      }
    ],
    favoriteTriplinksData: [
      {
        id: "o1PHRC1TGzdX4WAxHSZrdgCIweQ2",
        ownerId: "C5Ja2gXGLeIXTjhWZbDiWUWe8Whd",
        title: "テストデータ１",
        thumbnail:  "/images/thumbnail_sample.jpg",
        date: [
          "0000.00.00",
          "0000.00.01"
        ],
      }
    ]  }
}

export const NoData: Story = {
  args: {
    myTriplinksData: [],
    joinTriplinksData: [],
    favoriteTriplinksData: []
  }
}
