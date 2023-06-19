import Image from 'next/image'
import { ButtonFill } from '@/components/Buttons'
import { styles } from '@/styles/components/Cards/CardUserProfile.styles'

export const CardUserProfile = () => {
  return (
    <div css={styles.userProfileCardWrapper}>
      <div css={styles.userProfileWrapper}>
        <Image
          alt=""
          css={styles.userAvatar}
          height={64}
          src="/images/user_sample.jpeg"
          width={64}
        />
        <div>
          <div css={styles.userName}>み ゆ う</div>
          <div css={styles.userId}>@ma_ma_hima</div>
        </div>
      </div>
      <div css={styles.userStatus}>
        DESCRIPTIONが入りますDESCRIPTIONが入ります
      </div>
      <div css={styles.userFF}>3 フォロー | 12 フォロワー</div>
      <div css={styles.buttonFollow}>
        <ButtonFill>フォロー</ButtonFill>
      </div>
    </div>
  )
}
