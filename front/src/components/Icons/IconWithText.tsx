import Link from 'next/link'
import { FiTwitter } from 'react-icons/fi'
import {
  HiOutlineQrcode,
  HiOutlineBell,
  HiOutlineCog,
  HiOutlineQuestionMarkCircle,
  HiOutlineMail,
  HiOutlineShieldCheck,
  HiOutlineGlobeAlt
} from 'react-icons/hi'
import { styles } from '@/styles/components/Icons/IconWithText.styles'

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
    <Link css={styles.wrapper} href="/">
      {iconType === 'qr' && (
        <div>
          <HiOutlineQrcode size={24} />
          <p>QRコード</p>
        </div>
      )}
      {iconType === 'bell' && (
        <div>
          <HiOutlineBell size={24} />
          <p>通知</p>
        </div>
      )}
      {iconType === 'setting' && (
        <div>
          <HiOutlineCog size={24} />
          <p>設定</p>
        </div>
      )}
      {iconType === 'help' && (
        <div>
          <HiOutlineQuestionMarkCircle size={24} />
          <p>ヘルプ</p>
        </div>
      )}
      {iconType === 'mail' && (
        <div>
          <HiOutlineMail size={24} />
          <p>お問い合わせ</p>
        </div>
      )}
      {iconType === 'privacy' && (
        <div>
          <HiOutlineShieldCheck size={24} />
          <div css={styles.lines}>
            <p>
              プライバシー
              <br />
              ポリシー
            </p>
          </div>
        </div>
      )}
      {iconType === 'twitter' && (
        <div>
          <FiTwitter size={24} />
          <div css={styles.lines}>
            <p>
              公式
              <br />
              Twitter
            </p>
          </div>
        </div>
      )}
      {iconType === 'hp' && (
        <div>
          <HiOutlineGlobeAlt size={24} />
          <p>HP</p>
        </div>
      )}
    </Link>
  )
}
