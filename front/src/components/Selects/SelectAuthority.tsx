import { styles } from '@/styles/components/Selects/SelectAuthority.styles'

type SelectAuthorityProps = {
  canEdit: boolean
}

export const SelectAuthority = ({ canEdit }: SelectAuthorityProps) => {
  return (
    <div css={styles.wrapper}>
      <select name="authority">
        {canEdit ? (
          <>
            <option value="owner">編集可能</option>
            <option value="noEdit">見るだけ</option>
          </>
        ) : (
          <>
            <option value="noEdit">見るだけ</option>
            <option value="owner">編集可能</option>
          </>
        )}
      </select>
    </div>
  )
}
