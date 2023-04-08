import { Container } from '@/components/Containers'
import { styles } from '@/styles/components/Tabs/TabSample.styles'

type TabSampleProps = {
  data: {
    name: number
    value: string
  }[]
}

export const TabSample = ({ data }: TabSampleProps) => {
  return (
    <div css={styles.wrapper}>
      <div css={styles.tabs} id="tabs">
        <input
          css={styles.tabSwitch}
          defaultChecked
          id="tab1"
          name="tab"
          type="radio"
        />
        <label css={styles.tabLabel} htmlFor="tab1">
          {data[0].name}
        </label>
        <div css={styles.tabContent}>
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
                  css={styles.tabSwitch}
                  id={`tab${item.name}`}
                  name="tab"
                  type="radio"
                />
                <label css={styles.tabLabel} htmlFor={`tab${item.name}`}>
                  {item.name}
                </label>
                <div css={styles.tabContent}>
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
