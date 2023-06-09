import { Timestamp } from 'firebase/firestore'

export const formatTimestamp = (
  date: [Timestamp, Timestamp | null]
): [Timestamp, Timestamp | null] => {
  if (!date[1])
    return [new Timestamp(date[0].seconds, date[0].nanoseconds), null]
  return [
    new Timestamp(date[0].seconds, date[0].nanoseconds),
    new Timestamp(date[1].seconds, date[1].nanoseconds)
  ]
}
