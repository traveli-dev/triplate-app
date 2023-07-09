import Image from 'next/image'
import { HiOutlineLink, HiOutlineTag } from 'react-icons/hi'
import { ButtonSmall } from '@/components/Buttons'
import { CardTripListItem } from '@/components/Cards'
import { Tab, TabList, TabPanel, Tabs } from '@/components/Tabs'
import { useTabNavigation } from '@/hooks/tabs'
import type { TriplateType } from '@/redux/services/firestore'
import { styles } from '@/styles/components/Tabs/TabTriplate.styles'

type Itineraries = Pick<TriplateType, 'itineraries'>['itineraries']
type Memories = Pick<TriplateType, 'memories'>['memories']
type TabTriplateProps = {
  itineraries: Itineraries
  memories: Memories
}

export const TabTriplate = ({ itineraries, memories }: TabTriplateProps) => {
  const tabLength = Object.keys(itineraries).length
  const { focusedTab, tabListRef, handleTabClick, selectedTab } =
    useTabNavigation(tabLength)

  return (
    <Tabs>
      <TabList ref={tabListRef} type="triplate">
        {Object.keys(itineraries).map((_, index) => (
          <Tab
            focusedTab={focusedTab}
            handleTabClick={handleTabClick}
            key={index}
            selectedTab={selectedTab}
            tabName={`tab-${index}`}
            type="triplate"
          >
            {index + 1}日目
          </Tab>
        ))}
      </TabList>
      {Object.values(itineraries).map((value, index) => (
        <TabPanel
          key={index}
          panelName={`day-${index + 1}`}
          selectedTab={selectedTab}
          tabName={`tab-${index}`}
          type="triplate"
        >
          {memories[`day${index + 1}`] && (
            <>
              <div css={styles.imgWrapper}>
                <Image
                  alt=""
                  css={styles.thumbnail}
                  fill
                  src={memories[`day${index + 1}`].thumbnail ?? ''}
                />
              </div>
              <div css={styles.descriptionWrapper}>
                <div css={styles.tag}>
                  <HiOutlineTag size={20} />
                  <p>
                    {value[memories[`day${index + 1}`].itineraryId ?? 0].name}
                  </p>
                </div>
                <p css={styles.description}>
                  {memories[`day${index + 1}`].description}
                </p>
                <div css={styles.linkButton}>
                  <ButtonSmall Icon={HiOutlineLink} isFit>
                    Google Map
                  </ButtonSmall>
                </div>
              </div>
            </>
          )}
          <div css={styles.cardTripListItemWrapper}>
            <h2 css={styles.day}>{`Day${index + 1}の旅程`}</h2>
            {value.map((plan, index) => (
              <div css={styles.layoutCardTripListItem} key={index}>
                <CardTripListItem
                  date={null}
                  icon="map"
                  // TODO: iconを動的に
                  memo={plan.memo}
                  title={plan.name}
                  // TODO: date={plan.time}
                />
              </div>
            ))}
          </div>
        </TabPanel>
      ))}
    </Tabs>
  )
}
