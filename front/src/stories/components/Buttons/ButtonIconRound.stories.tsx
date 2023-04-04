import { ButtonIconRound } from '@/components/Buttons'
import { StoryObj, ComponentMeta } from '@storybook/react'

export default {
  component: ButtonIconRound
} as ComponentMeta<typeof ButtonIconRound>

export const Default: StoryObj = {}

export const Mobile: StoryObj = {
  parameters: {
    viewport: { defaultViewport: 'mobile1' }
  }
}