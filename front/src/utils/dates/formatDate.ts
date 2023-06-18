import { Timestamp } from 'firebase/firestore'
import { format } from 'date-fns'

export const formatDate = (date: Timestamp) =>
  format(date.toDate(), 'yyyy.MM.dd')
