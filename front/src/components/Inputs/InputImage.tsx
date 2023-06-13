import { ChangeEvent, ComponentPropsWithRef } from 'react'
import Image from 'next/image'
import { HiOutlineUpload } from 'react-icons/hi'
import { useInputImage } from '@/hooks/inputs'
import { styles } from '@/styles/components/Inputs/InputImage.styles'

export type InputImageType = 'avatar' | 'thumbnail'

type InputImageProps = ComponentPropsWithRef<'input'> & {
  src: string
  uploading: boolean
  type: InputImageType
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const InputImage = ({
  src,
  uploading,
  type,
  ...props
}: InputImageProps) => {
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
        <button
          css={type === 'thumbnail' && styles.previewWrapper}
          onClick={onClickImage}
        >
          <div css={styles.previewImage(type)}>
            <Image alt="" css={styles.image} fill src={src} />
          </div>
        </button>
      ) : (
        <button css={styles.defaultImage(type)} onClick={onClickImage}>
          <HiOutlineUpload size={24} />
          {/* TODO: ローディングアニメーション */}
          {uploading && <>ローディング</>}
          {type === 'thumbnail' ? (
            <span>画像をアップロード</span>
          ) : (
            <span>
              ユーザ画像を
              <br />
              アップロード
            </span>
          )}
        </button>
      )}
    </>
  )
}
