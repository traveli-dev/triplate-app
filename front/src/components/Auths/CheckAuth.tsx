import { useCheckAuth } from '@/hooks/auths'

type CheckAuthProps = {
  children: React.ReactNode
}

export const CheckAuth = ({ children }: CheckAuthProps) => {
  const { isSignIn } = useCheckAuth()

  return (
    <div>{isSignIn ? <div>{children}</div> : <div>ローディング中</div>}</div>
  )
}
