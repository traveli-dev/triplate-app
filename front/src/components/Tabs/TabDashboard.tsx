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
        isFull
        isPaddingNone
        panelName="publish"
        selectedTab={selectedTab}
        tabName="tab-0"
      >
        <List border>
          <ListItem
            IconRight={HiOutlineDotsVertical}
            href="/id"
            imgSrc="/images/thumbnail_sample.jpg"
            subText="海遊館|海遊館|海遊館|海遊館|海遊館|海遊館|海遊館|海遊館|海遊館"
            title="たび１たび１たび１たび１たび１たび１たび１たび１たび１たび１"
          />
          <ListItem
            IconRight={HiOutlineDotsVertical}
            href="/id"
            imgSrc="/images/thumbnail_sample.jpg"
            subText="海遊館|海遊館|海遊館"
            title="たび２"
          />
        </List>
      </TabPanel>
      <TabPanel
        bgColor="white"
        isFull
        isPaddingNone
        panelName="publish"
        selectedTab={selectedTab}
        tabName="tab-1"
      >
        <List border>
          <ListItem
            IconRight={HiOutlineDotsVertical}
            href="/id"
            imgSrc="/images/thumbnail_sample.jpg"
            subText="海遊館|海遊館|海遊館|海遊館|海遊館|海遊館"
            title="たび3"
          />
          <ListItem
            IconRight={HiOutlineDotsVertical}
            href="/id"
            imgSrc="/images/thumbnail_sample.jpg"
            title="たび4"
          />
        </List>
      </TabPanel>
    </Tabs>
  )
}
