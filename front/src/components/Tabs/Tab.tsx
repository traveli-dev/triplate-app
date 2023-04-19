import React, { useState } from 'react'
import { useEffect } from 'react'
import Link from 'next/link'
import { styles } from '@/styles/components/Tabs/Tab.styles'

export const Tab = () => {
  const [active, setActive] = useState<number>(1)

  useEffect(() => {
    const tabsection = document.getElementById('contents')
    if (tabsection) {
      tabsection.addEventListener('scroll', () => {
        setTimeout(determineActiveTabSection, 100)
      })
    }
    const tabnav = document.getElementById('tabs')
    const setActiveTab = (tabbtn: Element) => {
      tabbtn.scrollIntoView()
    }
    const determineActiveTabSection = () => {
      if (tabnav) {
        const tabnavitems = tabnav.querySelectorAll(':scope a')
        if (tabsection && tabnavitems) {
          const i = tabsection.scrollLeft / tabsection.clientWidth
          const matchingNavItem = tabnavitems[i]
          matchingNavItem && setActiveTab(matchingNavItem)
        }
      }
    }
    determineActiveTabSection()
  }, [active])
  return (
    <>
      <div css={styles.device}>
        <div css={styles.snapTabs}>
          <header css={[styles.header, styles.scrollSnapX]}>
            <nav css={styles.nav} id="tabs">
              <Link
                css={[active === 1 && styles.active]}
                href="#1day"
                id={active === 1 ? 'active' : '1'}
                onClick={() => setActive(1)}
              >
                1day
              </Link>
              <Link
                css={[active === 2 && styles.active]}
                href="#2day"
                id={active === 2 ? 'active' : '2'}
                onClick={() => setActive(2)}
              >
                2day
              </Link>
              <Link
                css={[active === 3 && styles.active]}
                href="#3day"
                id={active === 3 ? 'active' : '3'}
                onClick={() => setActive(3)}
              >
                3day
              </Link>
              <Link
                css={[active === 4 && styles.active]}
                href="#4day"
                onClick={() => setActive(4)}
              >
                4day
              </Link>
              <Link
                css={[active === 5 && styles.active]}
                href="#5day"
                onClick={() => setActive(5)}
              >
                5day
              </Link>
              <Link
                css={[active === 6 && styles.active]}
                href="#6day"
                onClick={() => setActive(6)}
              >
                6day
              </Link>
              <Link
                css={[active === 7 && styles.active]}
                href="#7day"
                onClick={() => setActive(7)}
              >
                7day
              </Link>
              <Link
                css={[active === 8 && styles.active]}
                href="#8day"
                id={active === 8 ? 'active' : '8'}
                onClick={() => setActive(8)}
              >
                8day
              </Link>
              <Link
                css={[active === 9 && styles.active]}
                href="#9day"
                onClick={() => setActive(9)}
              >
                9day
              </Link>
              <Link
                css={[active === 10 && styles.active]}
                href="#10day"
                onClick={() => setActive(10)}
              >
                10day
              </Link>
              <Link
                css={[active === 11 && styles.active]}
                href="#11day"
                onClick={() => setActive(11)}
              >
                11day
              </Link>
              <Link
                css={[active === 12 && styles.active]}
                href="#12day"
                onClick={() => setActive(12)}
              >
                12day
              </Link>
              <span css={styles.navIndicator({ active })}></span>
            </nav>
          </header>
          <section css={[styles.section, styles.scrollSnapX]} id="contents">
            <article id="1day">
              <p>1day</p>
              <p>1day</p>
              <p>1day</p>
              <p>1day</p>
              <p>1day</p>
              <p>1day</p>
              <p>1day</p>
              <p>1day</p>
              <p>1day</p>
              <p>1day</p>
              <p>1day</p>
              <p>1day</p>
              <p>1day</p>
              <p>1day</p>
              <p>1day</p>
              <p>1day</p>
              <p>1day</p>
              <p>1day</p>
              <p>1day</p>
              <p>1day</p>
              <p>1day</p>
              <p>1day</p>
              <p>1day</p>
              <p>1day</p>
              <p>1day</p>
              <p>1day</p>
              <p>1day</p>
              <p>1day</p>
              <p>1day</p>
              <p>1day</p>
              <p>1day</p>
              <p>1day</p>
              <p>1day</p>
              <p>1day</p>
              <p>1day</p>
              <p>1day</p>
              <p>1day</p>
              <p>1day</p>
              <p>1day</p>
              <p>1day</p>
              <p>1day</p>
              <p>1day</p>
              <p>1day</p>
              <p>1day</p>
              <p>1day</p>
            </article>
            <article id="2day">
              <p>2day</p>
            </article>
            <article id="3day">
              <p>3day</p>
            </article>
            <article id="4day">
              <p>4day</p>
            </article>
            <article id="5day">
              <p>5day</p>
            </article>
            <article id="6day">
              <p>6day</p>
            </article>
            <article id="7day">
              <p>7day</p>
            </article>
            <article id="8day">
              <p>8day</p>
            </article>
            <article id="9day">
              <p>9day</p>
            </article>
            <article id="10day">
              <p>10day</p>
            </article>
            <article id="11day">
              <p>11day</p>
            </article>
            <article id="12day">
              <p>12day</p>
            </article>
          </section>
        </div>
      </div>
    </>
  )
}
