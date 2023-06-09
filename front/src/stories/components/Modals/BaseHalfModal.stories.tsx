import { Title, Subtitle, Description, Controls } from '@storybook/blocks'
import { BaseHalfModal } from '@/components/Modals'
import type { StoryObj, Meta } from '@storybook/react'

const meta: Meta<typeof BaseHalfModal> = {
  component: BaseHalfModal,
  argTypes: {
    isOpen: {
      description: '開閉のstate（boolean）'
    },
    onClose: {
      description: '閉じるボタン用のハンドラ'
    },
    children: {
      description: 'modalのbody'
    },
    title: {
      description: 'modalを説明するh1'
    },
    isBlur: {
      description: 'overlay要素をグレーで表示するか'
    },
    usage: {
      description: 'id（string）'
    }
  },
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof BaseHalfModal>

export const Default: Story = {
  args: {
    isOpen: true,
    onClose: () => null,
    title: '編集する',
    children: <p>あいうえお</p>
  },
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Controls />
        </>
      )
    }
  }
}
