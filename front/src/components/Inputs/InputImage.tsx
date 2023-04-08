import { InputHTMLAttributes, useState } from 'react'
import Image from 'next/image'
import { HiOutlineUpload } from 'react-icons/hi'
import { useInputImage } from '@/hooks/inputs'
import { styles } from '@/styles/components/Inputs/InputImage.styles'

type InputImageProps = InputHTMLAttributes<HTMLInputElement> & {
  alt: string
}

export const InputImage = ({ alt }: InputImageProps) => {
  const [image, setImage] = useState<File | null>()
  const { inputRef, onClickImage } = useInputImage()

  return (
    <>
      <input
        accept="image/*"
        css={styles.hidden}
        ref={inputRef}
        type="file"
        onChange={(e) => {
          if (e.target.files !== null) {
            const file = e.target.files[0]
            setImage(file)
          }
        }}
      />
      {image ? (
        <div css={styles.previewImageWrapper}>
          <Image
            alt={alt}
            css={styles.previewImage}
            fill
            src={URL.createObjectURL(image as File)}
            onClick={onClickImage}
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
