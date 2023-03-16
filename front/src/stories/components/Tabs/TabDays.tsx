import React from 'react'
import styles from '@/styles/components/Tabs/TabDays.module.scss'
type TabDaysProps = {}

export const TabDays = ({}: TabDaysProps) => {
  return (
    <div>
      <Tabs />
    </div>
  )
}

export const Tabs = () => {
  return (
    <div className={styles.tabs}>
      <label>
        <input name={'tab'} type="radio" defaultChecked />
        <em>１日目</em>
      </label>
      <label>
        <input name={'tab'} type="radio" />
        <em>２日目</em>
      </label>
      <label>
        <input name={'tab'} type="radio" />
        <em>３日目</em>
      </label>
    </div>
  )
}
