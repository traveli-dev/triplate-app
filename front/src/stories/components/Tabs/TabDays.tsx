import React from 'react'
import styles from '@/styles/components/Tabs/TabDays.module.scss'

export const TabDays = () => {
  return (
    <div className={styles.tabs}>
      <label>
        <input name={'tab'} type={'radio'} defaultChecked />
        <span>１日目</span>
      </label>
      <label>
        <input name={'tab'} type={'radio'} />
        <span>２日目</span>
      </label>
      <label>
        <input name={'tab'} type={'radio'} />
        <span>３日目</span>
      </label>
    </div>
  )
}
