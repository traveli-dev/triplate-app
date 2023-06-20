import { Timestamp } from 'firebase/firestore'
import { differenceInDays } from 'date-fns'

export const calcStayDuration = (dates: [Timestamp, Timestamp]) => {
  const totalDays = differenceInDays(dates[1].toDate(), dates[0].toDate())
  return `${totalDays - 1}泊${totalDays}日`
}
