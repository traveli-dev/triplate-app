import styles from '@/styles/components/Tabs/TabDaysWithTravelink.module.scss'
import { Container } from '@/components/Containers'

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
    <div className={styles.wrapper}>
      <div className={styles.tabs} id="tabs">
        <input
          id="day1"
          type="radio"
          name="tab"
          className={styles.tab_switch}
          defaultChecked
        />
        <label className={styles.tab_label} htmlFor="day1" id="tab1">
          {travelinks[0].day}日目
        </label>
        <div className={styles.tab_content}>
          <Container bgColor="blue">{travelinks[0].name}</Container>
        </div>

        {travelinks.map((item) => (
          <>
            {item.day !== 1 && (
              <>
                <input
                  id={`day${item.day}`}
                  type="radio"
                  name="tab"
                  className={styles.tab_switch}
                />
                <label className={styles.tab_label} htmlFor={`day${item.day}`}>
                  <div id={`tab${item.day}`}>{item.day}日目</div>
                </label>
                <div className={styles.tab_content}>
                  <Container bgColor="blue" isFull>
                    {item.name}
                  </Container>
                </div>
              </>
            )}
          </>
        ))}
      </div>
    </div>
  )
}
