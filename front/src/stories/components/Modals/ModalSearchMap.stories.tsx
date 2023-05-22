import { Title, Subtitle, Description, Controls } from '@storybook/blocks'
import { ModalSearchMap } from '@/components/Modals'
import type { StoryObj, Meta } from '@storybook/react'

const meta: Meta<typeof ModalSearchMap> = {
  component: ModalSearchMap,
  argTypes: {
    mapRef: {
      description: 'google mapを描画するdivの参照'
    },
    onOpenConfirmModal: {
      description: '確認モーダルを開くハンドラ'
    }
  },
  render: () => {
    const mapRef = document.getElementById(
      'google-map-script'
    ) as HTMLDivElement
    const map = new google.maps.Map(mapRef)
    const onOpenConfirmModal = () => null

    return (
      <>
        <div id="google-map"></div>
        {map && (
          <ModalSearchMap
            mapRef={map}
            onOpenConfirmModal={onOpenConfirmModal}
          />
        )}
      </>
    )
  },
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof ModalSearchMap>

export const Default: Story = {
  args: {},
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
