import { FormUpdateUser } from '@/components/Forms'
import type { StoryObj, Meta } from '@storybook/react'

const meta: Meta<typeof FormUpdateUser> = {
  component: FormUpdateUser,
  argTypes: {
    data: {
      description: '初期値として与えるフォームデータ'
    },
    authUser: {
      description: '認証ユーザのiconとuid'
    }
  },
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof FormUpdateUser>

export const Default: Story = {
  args: {
    data: {
      userId: 'ma_ma_hima',
      icon: '',
      name: 'あいうえお',
      description: '私の自己紹介',
      links: {
        instagram: null,
        twitter: null
      }
    },
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
