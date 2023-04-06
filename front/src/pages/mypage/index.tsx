import { NextSeo } from 'next-seo'
import { css } from '@emotion/react'
import { Avatar } from '@/components/Avatars'
import { Container } from '@/components/Containers'
import { GridIconWithText } from '@/components/Grids'
import { NavigationBottom } from '@/components/Navigations'
import { theme } from '@/styles/theme'
import { mq } from '@/styles/utils'

const Mypage = () => {
  // example
  const user = {
    name: 'おぱんちゅうさぎ',
    location: '東京都',
    url: '/images/user_sample.jpeg'
  }
  return (
    <>
      {/* TODO:NextSeoのタイトルは適切なものに */}
      <NextSeo title={user.name} />
      <Container bgColor="white" isFull isCenter>
        <div css={styles.wrapper}>
          <div css={styles.content}>
            <div css={styles.user}>
              <Avatar url={user.url} size="lg" />
              <h1>{user.name}</h1>
              <p>{user.location}</p>
            </div>
            <GridIconWithText />
          </div>
        </div>
      </Container>
      <NavigationBottom />
    </>
  )
}

const styles = {
  wrapper: css`
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  content: css`
    width: 400px;
    ${mq('sm')} {
      max-width: 300px;
    }
  `,
  user: css`
    padding: 32px 0;
    & > h1 {
      margin: 16px 0;
      font-size: ${theme.fontSize.lg};
    }
    & > p {
      margin: 16px 0;
      font-size: ${theme.fontSize.sm};
    }
  `
}

export default Mypage
