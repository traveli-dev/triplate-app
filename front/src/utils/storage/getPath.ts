export const getTriplatePath = (
  uid: string,
  triplateId: string,
  type: 'thumbnail' | `day${number}`
) => `images/users/${uid}/triplates/${triplateId}/${type}`

export const getTriplinkPath = (triplinkId: string) =>
  `images/triplinks/${triplinkId}/thumbnail`

export const getProfilePath = (uid: string) =>
  `images/users/${uid}/profiles/icon`
