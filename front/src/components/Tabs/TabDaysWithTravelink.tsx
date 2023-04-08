import { Container } from '@/components/Containers'
import { styles } from '@/styles/components/Tabs/TabDaysWithTravelink.styles'

type TabDaysWithTravelinkProps = {
  travelinks: {
    day: number
    name: string
  }[]
}

export const TabDaysWithTravelink = ({
  travelinks
}: TabDaysWithTravelinkProps) => {
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
          {travelinks[0].day}日目
        </label>
        <div css={styles.tabContent}>
          <Container bgColor="blue">{travelinks[0].name}</Container>
        </div>

        {travelinks.map((item) => (
          <>
            {item.day !== 1 && (
              <>
                <input
                  css={styles.tabSwitch}
                  id={`day${item.day}`}
                  name="tab"
                  type="radio"
                />
                <label css={styles.tabLabel} htmlFor={`day${item.day}`}>
                  <div id={`tab${item.day}`}>{item.day}日目</div>
                </label>
                <div css={styles.tabContent}>
                  <Container bgColor="blue">{item.name}</Container>
                </div>
              </>
            )}
          </>
        ))}
      </div>
    </div>
  )
}
