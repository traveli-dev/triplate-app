import Link from 'next/link'
import { useRouter } from 'next/router'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { HiOutlineQrcode } from 'react-icons/hi'
import { ButtonFill } from '@/components/Buttons'
import { ButtonIconWIthTextHorizontal } from '@/components/Buttons/ButtonIconWithTextHorizontal'
import { Container } from '@/components/Containers'
import { Header } from '@/components/Headers'
import { ModalMember } from '@/components/Modals'
import { useSignOut } from '@/hooks/auths'
import { useDisclosure } from '@/hooks/modals'
import { auth } from '@/lib/firebase'
import { useAppSelector } from '@/redux/rootStore'
import { currentUserSelectors } from '@/redux/stores'
import { Tab, TabList, TabPanel, Tabs } from '@/components/Tabs'
import { useEffect, useRef, useState } from 'react'

const Index = () => {
  const router = useRouter()

  const { isOpen, onOpen, onClose } = useDisclosure()
  const { signOutHandler } = useSignOut()
  const currentUser = useAppSelector(currentUserSelectors.currentUserData)

  // 仮置き
  const signInTestUser = async () => {
    await signInWithEmailAndPassword(auth, 'test@example.com', 'password')
    router.push('/home')
  }

  type SelectedTab = `tab-${number}`
  const [selectedTab, setSelectedTab] = useState<SelectedTab>('tab-1')
  const [focusedTab, setFocusedTab] = useState<SelectedTab>('tab-1')
  const tabListRef = useRef<HTMLDivElement>(null)
  const tabsRef = useRef<HTMLDivElement>(null)
  const data = {
    day1: [
      {
        id: 0,
        isSecret: false,
        url: 'https://maps.google.com/?cid=13121875705491233800',
        name: '京都駅',
        time: {
          _seconds: 1698195600,
          _nanoseconds: 0
        },
        memo: '駅に着いたら荷物預ける'
      },
      {
        id: 1,
        isSecret: false,
        url: 'https://maps.google.com/?cid=6059551674669155929',
        name: '京都水族館',
        time: null,
        memo: null
      },
      {
        id: 2,
        isSecret: false,
        url: 'https://maps.google.com/?cid=14940864174397642651',
        name: 'アパホテル〈京都駅前〉',
        time: {
          _seconds: 1698224400,
          _nanoseconds: 0
        },
        memo: '荷物の回収忘れない'
      }
    ],
    day2: [
      {
        id: 0,
        isSecret: false,
        url: 'https://maps.google.com/?cid=14940864174397642651',
        name: 'アパホテル〈京都駅前〉',
        time: {
          _seconds: 1698285600,
          _nanoseconds: 0
        },
        memo: null
      },
      {
        id: 1,
        isSecret: false,
        url: 'https://maps.google.com/?cid=13159134450370243740',
        name: '錦市場',
        time: null,
        memo: null
      },
      {
        id: 2,
        isSecret: false,
        url: null,
        name: 'ホテルで夕食',
        time: {
          _seconds: 1698314400,
          _nanoseconds: 0
        },
        memo: null
      }
    ],
    day3: [
      {
        id: 0,
        isSecret: false,
        url: 'https://maps.google.com/?cid=14940864174397642651',
        name: 'アパホテル〈京都駅前〉',
        time: {
          _seconds: 1698372000,
          _nanoseconds: 0
        },
        memo: null
      },
      {
        id: 1,
        isSecret: false,
        url: 'https://maps.google.com/?cid=5767768846672272791',
        name: 'ぱんだの散歩',
        time: null,
        memo: 'みたらし団子'
      },
      {
        id: 2,
        isSecret: false,
        url: null,
        name: '新幹線乗って帰る',
        time: {
          _seconds: 1698404400,
          _nanoseconds: 0
        },
        memo: null
      },
      {
        id: 3,
        isSecret: true,
        url: 'http://rps.ana.co.jp/web/ncnv/uu/asm/all3216.php',
        name: '新幹線webチケット',
        time: null,
        memo: null
      }
    ]
  }

  useEffect(() => {
    const currentTabList = tabListRef.current as HTMLElement
    const handleKeyDown = (e: KeyboardEvent) => {
      const t = focusedTab.replace('tab-', '')
      let tabIndex = parseInt(t)

      if (e.key === 'ArrowLeft') {
        tabIndex--
        if (tabIndex < 1) {
          tabIndex = Object.keys(data).length
        }
      } else if (e.key === 'ArrowRight') {
        tabIndex++
        if (tabIndex > Object.keys(data).length) {
          tabIndex = 1
        }
      }
      setFocusedTab(`tab-${tabIndex}`)
      const nextFocusTab = currentTabList.children[tabIndex - 1] as HTMLElement
      nextFocusTab.focus()
    }

    if (currentTabList) {
      currentTabList.addEventListener('keydown', handleKeyDown)
    }
    return () => {
      if (currentTabList) {
        currentTabList.removeEventListener('keydown', handleKeyDown)
      }
    }
  }, [focusedTab])

  return (
    <>
      <Header href="/" title="GoogleMapから追加" />
      <Container bgColor="blue">
        <Tabs>
          <TabList ref={tabListRef}>
            {Object.keys(data).map((_, index) => (
              <Tab
                focusedTab={focusedTab}
                key={index}
                selectedTab={selectedTab}
                setSelectedTab={setSelectedTab}
                tabName={`tab-${index + 1}`}
              >
                {index + 1}日目
              </Tab>
            ))}
          </TabList>
          {Object.values(data).map((value, index) => (
            <TabPanel
              key={index}
              panelName={`day-${index + 1}`}
              selectedTab={selectedTab}
              tabName={`tab-${index + 1}`}
            >
              <p>{value[0].name}</p>
            </TabPanel>
          ))}
        </Tabs>
        <div>
          <ul>
            <li>name: {currentUser.name}</li>
            <li>userId: {currentUser.userId}</li>
          </ul>
        </div>
        <div>
          <ButtonFill
            onClick={() => {
              router.push('/auth?redirectUri=/user/new')
            }}
          >
            サインイン
          </ButtonFill>
          <ButtonFill onClick={signOutHandler}>サインアウト</ButtonFill>
        </div>
        <div>動作確認なう</div>
        <div>
          <Link href="/home">/home</Link>
        </div>
        <div>
          <Link href="/create">/create</Link>
        </div>
        <div>
          <Link href="/triplink/123">/triplink/123</Link>
        </div>
        <div>
          <Link href="/triplate/[triplinkId]">/triplate/xxx</Link>
        </div>
      </Container>
      <ButtonIconWIthTextHorizontal
        Icon={HiOutlineQrcode}
        title="aaaa"
        onClick={onOpen}
      />

      {process.env.NODE_ENV === 'development' && (
        <ButtonFill onClick={signInTestUser}>
          テストユーザでログイン（シードデータ）
        </ButtonFill>
      )}
      <ModalMember isOpen={isOpen} onClose={onClose} />
    </>
  )
}

export default Index
