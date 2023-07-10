import { CardTripListItem } from '@/components/Cards'
import { Tab, TabList, TabPanel, Tabs } from '@/components/Tabs'
import { useTabNavigation } from '@/hooks/tabs'
import type { TriplinkType } from '@/redux/services/firestore'
import { styles } from '@/styles/components/Tabs/TabTriplink.styles'

type TabTriplinkProps = {
  triplinks: TriplinkType['itineraries']
}

export const TabTriplink = ({ triplinks }: TabTriplinkProps) => {
  const tabLength = Object.keys(triplinks).length
  const { focusedTab, tabListRef, handleTabClick, selectedTab } =
    useTabNavigation(tabLength)

  return (
    <Tabs>
      <TabList border fitContent ref={tabListRef}>
        {Object.keys(triplinks).map((_, index) => (
          <Tab
            focusedTab={focusedTab}
            handleTabClick={handleTabClick}
            key={index}
            selectedTab={selectedTab}
            tabName={`tab-${index}`}
            type="default"
          >
            {index + 1}日目
          </Tab>
        ))}
      </TabList>
      {Object.values(triplinks).map((value, index) => (
        <TabPanel
          bgColor="bgGray"
          key={index}
          panelName={`day-${index + 1}`}
          selectedTab={selectedTab}
          tabName={`tab-${index}`}
        >
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
        </TabPanel>
      ))}
    </Tabs>
  )
}
