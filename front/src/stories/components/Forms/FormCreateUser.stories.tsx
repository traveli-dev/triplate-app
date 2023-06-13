import { FormCreateUser } from '@/components/Forms'
import type { StoryObj, Meta } from '@storybook/react'

const meta: Meta<typeof FormCreateUser> = {
  component: FormCreateUser,
  argTypes: {
    window: {
      description: 'ユーザネーム入力かプロフィール入力の出しわけ'
    },
    setWindow: {
      description: 'windowを切り替えるsetter'
    },
    authUser: {
      description: '認証ユーザのiconとuid'
    }
  },
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof FormCreateUser>

export const Default: Story = {
  args: {
    window: 'setName',
    authUser: {
      uid: 'aiueo',
      icon: ''
    }
  },
  parameters: {
    backgrounds: {
      default: 'white'
    }
  }
}
