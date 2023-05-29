import { useSignIn } from '@/hooks/auths'

const AuthRedirectPage = () => {
  useSignIn()

  return <>ローディング</>
}

export default AuthRedirectPage
