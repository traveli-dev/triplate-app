import { ComponentPropsWithRef } from 'react'
import Image from 'next/image'
import { HiOutlineUpload } from 'react-icons/hi'
import { useInputImage } from '@/hooks/inputs'
import { styles } from '@/styles/components/Inputs/InputImage.styles'

type InputImageProps = ComponentPropsWithRef<'input'> & {
  alt: string
}

export const InputImage = ({ alt, ...props }: InputImageProps) => {
  const { inputRef, image, onChangeImage, onClickImage } = useInputImage()
  return (
    <>
      <input
        accept="image/*"
        css={styles.hidden}
        ref={inputRef}
        type="file"
        onChange={onChangeImage}
        {...props}
      />
      {image ? (
        <div css={styles.previewImageWrapper}>
          <Image
            alt={alt}
            css={styles.previewImage}
            fill
            src={URL.createObjectURL(image)}
          />
        </div>
      ) : (
        <button css={styles.uploadImage} onClick={onClickImage}>
          <HiOutlineUpload size={24} />
          <span>画像をアップロード</span>
        </button>
      )}
    </>
  )
}
