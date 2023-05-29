import { useCheckAuth } from '@/hooks/auths'
import { useAppSelector } from '@/redux/rootStore'
import { authSelectors, currentUserSelectors } from '@/redux/stores'

type CheckAuthProps = {
  children: React.ReactNode
}

export const CheckAuth = ({ children }: CheckAuthProps) => {
  const currentUserUid = useAppSelector(authSelectors.currentUserUid)
  const isRegisteredUser = useAppSelector(currentUserSelectors.isRegisteredUser)

  const { isCurrentPageStatic, isCurrentPageRequireUserRegistration } =
    useCheckAuth()

  const isReady =
    isCurrentPageStatic ||
    (isRegisteredUser && currentUserUid) ||
    !isCurrentPageRequireUserRegistration

  return <div>{isReady ? <div>{children}</div> : <>ローディング</>}</div>
}
