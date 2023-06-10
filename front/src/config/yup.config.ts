import * as yup from 'yup'
import { StringSchema } from 'yup'

// 文字数制限
yup.addMethod<StringSchema>(
  yup.string,
  'maxLength',
  function (max: number, name: string) {
    return this.test('maxLength', function (value) {
      if (value && value.length > max) {
        return this.createError({
          message: `${name}を、あと${value.length - max}文字短くしてください`,
          path: this.path
        })
      }
      return true
    })
  }
)

declare module 'yup' {
  interface StringSchema {
    maxLength(max: number, name: string): StringSchema
  }
}

export default yup
