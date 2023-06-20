import { Timestamp } from 'firebase/firestore'

export const formatTimestamp = (
  date: [Timestamp, Timestamp]
): [Timestamp, Timestamp] => {
  return [
    new Timestamp(date[0].seconds, date[0].nanoseconds),
    new Timestamp(date[1].seconds, date[1].nanoseconds)
  ]
}
