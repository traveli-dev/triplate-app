import { InputHTMLAttributes } from 'react'
import Image from 'next/image'
import { HiOutlineUpload } from 'react-icons/hi'
import { useInputImage } from '@/hooks/inputs'
import { round, styles } from '@/styles/components/Inputs/InputImage.styles'

type InputImageProps = InputHTMLAttributes<HTMLInputElement> & {
  alt: string
  shape: 'box' | 'round'
}
export const InputImage = ({ alt, shape, ...props }: InputImageProps) => {
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
      {shape == 'box' && (
        <div>
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
        </div>
      )}
      {shape == 'round' && (
        <div>
          {image ? (
            <div css={[round, styles.previewImageWrapper]}>
              <Image
                alt={alt}
                css={styles.previewImage}
                fill
                src={URL.createObjectURL(image)}
              />
            </div>
          ) : (
            <button css={[round, styles.uploadImage]} onClick={onClickImage}>
              <HiOutlineUpload size={24} />
              <span>画像をアップロード</span>
            </button>
          )}
        </div>
      )}
    </>
  )
}
