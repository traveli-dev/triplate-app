import { HiOutlineDotsVertical } from 'react-icons/hi'
import { List, ListItem } from '@/components/Lists'
import { Tab, TabList, TabPanel, Tabs } from '@/components/Tabs'
import { useTabNavigation } from '@/hooks/tabs'

export const TabDashboard = () => {
  const { focusedTab, tabListRef, handleTabClick, selectedTab } =
    useTabNavigation(2)

  return (
    <Tabs>
      <TabList border ref={tabListRef}>
        <Tab
          focusedTab={focusedTab}
          handleTabClick={handleTabClick}
          selectedTab={selectedTab}
          tabName="tab-0"
          type="two"
        >
          公開中
        </Tab>
        <Tab
          focusedTab={focusedTab}
          handleTabClick={handleTabClick}
          selectedTab={selectedTab}
          tabName="tab-1"
          type="two"
        >
          下書き
        </Tab>
      </TabList>

      <TabPanel
        bgColor="white"
        isPaddingNone
        panelName="publish"
        selectedTab={selectedTab}
        tabName="tab-0"
        isFull
      >
        <List border>
          <ListItem
            title="たび１たび１たび１たび１たび１たび１たび１たび１たび１たび１"
            href="/id"
            subText="海遊館|海遊館|海遊館|海遊館|海遊館|海遊館|海遊館|海遊館|海遊館"
            imgSrc="/images/thumbnail_sample.jpg"
            IconRight={HiOutlineDotsVertical}
          />
          <ListItem
            title="たび２"
            href="/id"
            subText="海遊館|海遊館|海遊館"
            imgSrc="/images/thumbnail_sample.jpg"
            IconRight={HiOutlineDotsVertical}
          />
        </List>
      </TabPanel>
      <TabPanel
        bgColor="white"
        isPaddingNone
        panelName="publish"
        selectedTab={selectedTab}
        tabName="tab-1"
        isFull
      >
        <List border>
          <ListItem
            title="たび3"
            href="/id"
            subText="海遊館|海遊館|海遊館|海遊館|海遊館|海遊館"
            imgSrc="/images/thumbnail_sample.jpg"
            IconRight={HiOutlineDotsVertical}
          />
          <ListItem
            title="たび4"
            href="/id"
            imgSrc="/images/thumbnail_sample.jpg"
            IconRight={HiOutlineDotsVertical}
          />
        </List>
      </TabPanel>
    </Tabs>
  )
}
