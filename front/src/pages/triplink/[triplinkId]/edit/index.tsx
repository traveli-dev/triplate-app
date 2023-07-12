import { useRouter } from 'next/router'
import { HiOutlinePlus } from 'react-icons/hi'
import { ButtonOutline } from '@/components/Buttons'
import { Header } from '@/components/Headers'
import { ModalAddPlace } from '@/components/Modals'
import { useDisclosure } from '@/hooks/modals'
import { mapSelectors } from '@/redux/features'
import { useAppSelector } from '@/redux/store'

const TriplinkEdit = () => {
  const router = useRouter()
  const { triplinkId } = router.query

  const { isOpen, onClose, onOpen } = useDisclosure()

  const currentCenter = useAppSelector(mapSelectors.currentCenter)

  return (
    <div>
      <Header href={`/triplink/${triplinkId}`} title="旅程を編集" />
      {currentCenter.name}
      {currentCenter.address}
      <ButtonOutline Icon={HiOutlinePlus} onClick={onOpen}>
        行き先を追加
      </ButtonOutline>
      <ModalAddPlace isOpen={isOpen} onClose={onClose} />
    </div>
  )
}

export default TriplinkEdit
