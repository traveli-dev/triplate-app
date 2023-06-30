import { useCheckAuth } from '@/hooks/auths'
import { authSelectors, currentUserSelectors } from '@/redux/features'
import { useAppSelector } from '@/redux/store'

type CheckAuthProps = {
  children: React.ReactNode
}

export const CheckAuth = ({ children }: CheckAuthProps) => {
  const currentUid = useAppSelector(authSelectors.currentUid)
  const isRegisteredUser = useAppSelector(currentUserSelectors.isRegisteredUser)

  const { isCurrentPageStatic, isCurrentPageRequireUserRegistration } =
    useCheckAuth()

  const isReady =
    isCurrentPageStatic ||
    (isRegisteredUser && currentUid) ||
    !isCurrentPageRequireUserRegistration

  return <div>{isReady ? <div>{children}</div> : <>ローディング</>}</div>
}
