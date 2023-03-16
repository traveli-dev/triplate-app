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

type IconWithiconProps = {
  icon:
    | 'qr'
    | 'bell'
    | 'setting'
    | 'help'
    | 'mail'
    | 'privacy'
    | 'twitter'
    | 'hp'
}

export const IconWithText = ({ icon }: IconWithiconProps) => {
  return (
    <div className={styles.wrapper}>
      {icon === 'qr' && (
        <>
          <HiOutlineQrcode size={24} />
          <p>QRコード</p>
        </>
      )}
      {icon === 'bell' && (
        <>
          <HiOutlineBell size={24} />
          <p>通知</p>
        </>
      )}
      {icon === 'setting' && (
        <>
          <HiOutlineCog size={24} />
          <p>設定</p>
        </>
      )}
      {icon === 'help' && (
        <>
          <HiOutlineQuestionMarkCircle size={24} />
          <p>ヘルプ</p>
        </>
      )}
      {icon === 'mail' && (
        <>
          <HiOutlineMail size={24} />
          <p>お問い合わせ</p>
        </>
      )}
      {icon === 'privacy' && (
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
      {icon === 'twitter' && (
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
      {icon === 'hp' && (
        <>
          <HiOutlineGlobeAlt size={24} />
          <p>HP</p>
        </>
      )}
    </div>
  )
}
