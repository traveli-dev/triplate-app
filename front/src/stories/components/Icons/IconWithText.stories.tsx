import { StoryObj, ComponentMeta } from '@storybook/react'
import { IconWithText } from '@/components/Icons'

export default {
  component: IconWithText,
  render: ({ icon }) => {
    return <IconWithText icon={icon} />
  }
} as ComponentMeta<typeof IconWithText>

export const Default: StoryObj = {
  args: {
    icon: 'qr'
  }
}
