import Image from 'next/image'
import { ButtonFill } from '@/components/Buttons'
import { styles } from '@/styles/components/Cards/CardUserProfile.styles'
import { UserType } from '@/redux/services/firestore'

type CardUserProfileProps = {
  userData: UserType
}

export const CardUserProfile = ({userData }: CardUserProfileProps) => {
  return (
    <div css={styles.userProfileCardWrapper}>
      <div css={styles.userProfileWrapper}>
        <Image
          alt=""
          css={styles.userAvatar}
          height={64}
          src={userData.icon}
          width={64}
        />
        <div>
          <div css={styles.userName}>{userData.name}</div>
          <div css={styles.userId}>@{userData.userId}</div>
        </div>
      </div>
      <div css={styles.userStatus}>
        {userData.description}
      </div>
      {/* TODO:FFデータ（別タスクにて修正） */}
      <div css={styles.userFF}>3 フォロー | 12 フォロワー</div>
      {/* TODO:フォロー */}
      <div css={styles.buttonFollow}>
        <ButtonFill>フォロー</ButtonFill>
      </div>
    </div>
  )
}
