import { Timestamp } from 'firebase/firestore'

export type GetTriplinkType = TriplinkType & {
  id: string
}

export type CreateTriplinkType = Omit<TriplinkType, 'updatedAt'>

export type TriplinkType = {
  ownerId: string
  title: string
  thumbnail: string
  date: [Timestamp, Timestamp]
  createdAt: Timestamp
  updatedAt: Timestamp | null
}

export type MyTripType = {
  triplinkId: string
}

export type JoinTripType = {
  triplinkId: string
}
