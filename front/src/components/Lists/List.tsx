import { styles } from '@/styles/components/Lists/List.styles'

type ListProps = {
  children: React.ReactNode
  border?: boolean
}

export const List = ({ children, border = false }: ListProps) => {
  return <ul css={styles.listWrapper(border)}>{children}</ul>
}
