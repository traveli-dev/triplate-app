import { useCheckAuth } from '@/hooks/auths'
import { useAppSelector } from '@/redux/rootStore'
import { authSelectors, currentUserSelectors } from '@/redux/stores'

type CheckAuthProps = {
  children: React.ReactNode
}

export const CheckAuth = ({ children }: CheckAuthProps) => {
  const currentUserUid = useAppSelector(authSelectors.currentUserUid)
  const currentUserData = useAppSelector(currentUserSelectors.currentUserData)

  const { isCurrentPageStatic, isCurrentPageRequireUserRegistration } =
    useCheckAuth()

  const isReady =
    isCurrentPageStatic ||
    (currentUserData && currentUserUid) ||
    !isCurrentPageRequireUserRegistration

  return <div>{isReady ? <div>{children}</div> : <>ローディング</>}</div>
}
