import React from 'react'
import { Container } from '@/components/Containers'
import { styles } from '@/styles/components/Tabs/TabDaysWithTriplink.styles'

type TabDaysWithTriplinkProps = {
  triplinks: {
    day: number
    name: string
  }[]
}

export const TabDaysWithTriplink = ({
  triplinks
}: TabDaysWithTriplinkProps) => {
  return (
    <div css={styles.wrapper}>
      <div css={styles.tabs} id="tabs">
        <input
          css={styles.tabSwitch}
          defaultChecked
          id="day1"
          name="tab"
          type="radio"
        />
        <label css={styles.tabLabel} htmlFor="day1" id="tab1">
          {triplinks[0].day}日目
        </label>
        <div css={styles.tabContent}>
          <Container bgColor="blue">{triplinks[0].name}</Container>
        </div>

        {triplinks.map((item) => (
          <React.Fragment key={item.day}>
            {item.day !== 1 && (
              <>
                <input
                  css={styles.tabSwitch}
                  id={`day${item.day}`}
                  key={item.day}
                  name="tab"
                  type="radio"
                />
                <label css={styles.tabLabel} htmlFor={`day${item.day}`}>
                  {item.day}日目
                </label>
                <div css={styles.tabContent}>
                  <Container bgColor="blue">{item.name}</Container>
                </div>
              </>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}