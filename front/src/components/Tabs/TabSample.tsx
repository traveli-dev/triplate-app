import React, { useState } from 'react'
import { Container } from '@/components/Containers'
import { styles } from '@/styles/components/Tabs/TabSample.styles'

type TabSampleProps = {
  data: {
    name: number
    value: string
  }[]
}

export const TabSample = ({ data }: TabSampleProps) => {
  const [isSelected, setIsSelected] = useState<number>(0)
  return (
    <div css={styles.wrapper}>
      <div css={styles.tabs} id="tabs">
        {data.map((item, index) => (
          <React.Fragment key={item.name}>
            <input
              checked={isSelected === index && true}
              css={styles.tabSwitch}
              id={`tab${item.name}`}
              name="tab"
              type="radio"
              onClick={() => setIsSelected(index)}
            />
            <label css={styles.tabLabel} htmlFor={`tab${item.name}`}>
              {item.name}
            </label>
            <div css={styles.tabContent}>
              <Container bgColor="blue">
                {/* タブの中身を入れる */}
                {item.value}
              </Container>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}
