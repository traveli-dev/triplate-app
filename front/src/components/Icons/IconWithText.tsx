import Link from 'next/link'
import { css } from '@emotion/react'
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
import { theme } from '@/styles/theme'

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
    <Link href="/" css={styles.wrapper}>
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

const styles = {
  wrapper: css`
    font-size: ${theme.fontSize.sm};
    text-decoration: none;
    width: 80px;
    padding: 10px 0;
    text-align: center;
    background-color: ${theme.color.white};
    color: ${theme.color.black};
    :hover {
      color: ${theme.color.blue};
    }
    p {
      margin: 12px 0;
    }
  `,
  lines: css`
    display: table;
    width: 100%;
    height: 3.6rem; // フォントサイズとともに高さも変化するため
    margin: 4px 0 0 0;
    & > p {
      display: table-cell;
      vertical-align: middle;
    }
  `
}
