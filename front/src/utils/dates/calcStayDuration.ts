import { Timestamp } from 'firebase/firestore'
import { differenceInDays } from 'date-fns'

export const calcStayDuration = (dates: [Timestamp, Timestamp | null]) => {
  if (!dates[1]) return '0泊1日'

  const totalDays = differenceInDays(dates[1].toDate(), dates[0].toDate())
  return `${totalDays - 1}泊${totalDays}日`
}
