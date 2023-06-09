import { ChangeEvent, ComponentPropsWithRef } from 'react'
import Image from 'next/image'
import { HiOutlineUpload } from 'react-icons/hi'
import { useInputImage } from '@/hooks/inputs'
import { styles } from '@/styles/components/Inputs/InputImage.styles'

type InputImageProps = ComponentPropsWithRef<'input'> & {
  src: string
  uploading: boolean
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const InputImage = ({ src, uploading, ...props }: InputImageProps) => {
  const { inputRef, onClickImage } = useInputImage()
  return (
    <>
      <input
        accept="image/*"
        css={styles.hidden}
        ref={inputRef}
        type="file"
        {...props}
      />
      {src ? (
        <div css={styles.previewImageWrapper}>
          <Image alt="" css={styles.previewImage} fill src={src} />
        </div>
      ) : (
        <button css={styles.uploadImage} onClick={onClickImage}>
          <HiOutlineUpload size={24} />
          {/* TODO: ローディングアニメーション */}
          {uploading && <>ローディング</>}
          <span>画像をアップロード</span>
        </button>
      )}
    </>
  )
}
