import { useEffect, useState } from 'react'
import { Toast, ToastProps } from '@/components/Toasts'
import type { StoryObj, Meta } from '@storybook/react'

const meta: Meta<typeof Toast> = {
  component: Toast,
  argTypes: {
    visible: {
      description: '表示，非表示'
    },
    message: {
      description: '表示されるメッセージ'
    },
    type: {
      description: 'errorは赤，successは緑'
    }
  }
}
export default meta

type Story = StoryObj<typeof Toast>

export const Success: Story = {
  args: {
    visible: true,
    message: 'プロフィールを保存しましたプロフィールを保存しました',
    type: 'success'
  }
}

export const Error: Story = {
  args: {
    visible: true,
    message: 'アップロードに失敗しました',
    type: 'error'
  }
}

const ToastWithAnimation = ({ message, type }: ToastProps) => {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible((prevVisible) => !prevVisible)
    }, 3000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return <Toast message={message} type={type} visible={visible} />
}

export const WithAnimation: Story = {
  args: {
    type: 'success',
    message: 'プロフィールを保存しましたプロフィールを保存しました'
  },
  render: (args) => {
    return <ToastWithAnimation {...args} />
  }
}
