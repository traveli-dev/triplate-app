import { Container } from '@/components/Containers'
import styles from '@/styles/components/Tabs/TabSample.module.scss'

type TabSampleProps = {
  data: {
    name: number
    value: string
  }[]
}

export const TabSample = ({ data }: TabSampleProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.tabs} id="tabs">
        <input
          id="tab1"
          type="radio"
          name="tab"
          className={styles.tab_switch}
          defaultChecked
        />
        <label className={styles.tab_label} htmlFor="tab1">
          {data[0].name}
        </label>
        <div className={styles.tab_content}>
          <Container bgColor="blue">
            {/* タブの中身を入れる */}
            {data[0].value}
          </Container>
        </div>

        {data.map((item) => (
          <>
            {item.name !== 1 && (
              <>
                <input
                  id={`tab${item.name}`}
                  type="radio"
                  name="tab"
                  className={styles.tab_switch}
                />
                <label className={styles.tab_label} htmlFor={`tab${item.name}`}>
                  {item.name}
                </label>
                <div className={styles.tab_content}>
                  <Container bgColor="blue" isFull>
                    {/* タブの中身を入れる */}
                    {item.value}
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
