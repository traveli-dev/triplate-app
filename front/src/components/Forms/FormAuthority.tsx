import { SelectAuthority } from '@/components/Selects'

type FormAuthorityProps = {
  canEdit: boolean
}

export const FormAuthority = ({ canEdit }: FormAuthorityProps) => {
  return (
    <>
      <form action="POST">
        <SelectAuthority canEdit={canEdit} />
      </form>
    </>
  )
}
