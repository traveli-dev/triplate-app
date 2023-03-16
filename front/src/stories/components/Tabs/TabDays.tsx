import React from "react"
import styles from '@/styles/components/Tabs/TabDays.module.scss'
type TabDaysProps = {

}


export const TabDays = ({ }: TabDaysProps) => {

    return (
        <div className={styles.tab_days}>
            <Tabs />
        </div>
    )
}

export const Tabs = () => {
    return (
        <div className={styles.tabs}>
            <label>
                <input className={styles.tab} name={"tab"} type="radio" defaultChecked/>
                    <em>MENU1</em><span>TEXT1</span>
            </label>
            <label>
                <input className={styles.tab} name={"tab"} type="radio"/>
                    <em>MENU2</em><span>TEXT2</span>
            </label>
            <label>
                <input className={styles.tab} name={"tab"} type="radio"/>
                    <em>MENU3</em><span>TEXT3</span>
            </label>
        </div>
    )
}


