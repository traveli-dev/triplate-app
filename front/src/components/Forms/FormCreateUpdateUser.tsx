import { InputLabel, InputText, InputTextArea } from '@/components/Inputs'

export const FormCreateUpdateUser = () => {
  return (
    <form>
      <InputLabel
        htmlFor="name"
        subText="いつでも変更できます"
        text="表示される名前"
      >
        <InputText id="name" placeholder="表示される名前を入力" />
      </InputLabel>
      <InputLabel htmlFor="description" subText="任意" text="自己紹介">
        <InputTextArea id="description" placeholder="自己紹介" />
      </InputLabel>
    </form>
  )
}
