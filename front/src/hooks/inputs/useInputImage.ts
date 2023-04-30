import { ChangeEvent, useRef, useState } from 'react'

export const useInputImage = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [image, setImage] = useState<File | null>()

  const onChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files !== null) {
      const file = e.target.files[0]
      setImage(file)
    }
  }

  const onClickImage = () => {
    inputRef.current?.click()
  }

  return { inputRef, image, onChangeImage, onClickImage }
}
