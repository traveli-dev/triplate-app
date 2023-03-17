import {
  HiOutlineQrcode,
  HiOutlineBell,
  HiOutlineCog,
  HiOutlineQuestionMarkCircle,
  HiOutlineMail,
  HiOutlineShieldCheck,
  HiOutlineGlobeAlt
} from 'react-icons/hi'
import { FiTwitter } from 'react-icons/fi'
import styles from '@/styles/components/Icons/IconWithText.module.scss'
import Link from 'next/link'

type IconWithiconProps = {
  iconType:
    | 'qr'
    | 'bell'
    | 'setting'
    | 'help'
    | 'mail'
    | 'privacy'
    | 'twitter'
    | 'hp'
}

export const IconWithText = ({ iconType }: IconWithiconProps) => {
  return (
    <Link href="/" className={styles.wrapper}>
      {iconType === 'qr' && (
        <>
          <HiOutlineQrcode size={24} />
          <p>QRコード</p>
        </>
      )}
      {iconType === 'bell' && (
        <>
          <HiOutlineBell size={24} />
          <p>通知</p>
        </>
      )}
      {iconType === 'setting' && (
        <>
          <HiOutlineCog size={24} />
          <p>設定</p>
        </>
      )}
      {iconType === 'help' && (
        <>
          <HiOutlineQuestionMarkCircle size={24} />
          <p>ヘルプ</p>
        </>
      )}
      {iconType === 'mail' && (
        <>
          <HiOutlineMail size={24} />
          <p>お問い合わせ</p>
        </>
      )}
      {iconType === 'privacy' && (
        <>
          <HiOutlineShieldCheck size={24} />
          <div className={styles.wrapper__lines}>
            <p>
              プライバシー
              <br />
              ポリシー
            </p>
          </div>
        </>
      )}
      {iconType === 'twitter' && (
        <>
          <FiTwitter size={24} />
          <div className={styles.wrapper__lines}>
            <p>
              公式
              <br />
              Twitter
            </p>
          </div>
        </>
      )}
      {iconType === 'hp' && (
        <>
          <HiOutlineGlobeAlt size={24} />
          <p>HP</p>
        </>
      )}
    </Link>
  )
}
