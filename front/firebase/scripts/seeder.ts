const firebase = require('firebase-admin')
const {
  getFirestore,
  connectFirestoreEmulator
} = require('firebase-admin/firestore')
const serviceAcountKey = require('../cert/service-account-key.json')

type Aiueo = {
  name: string
  age: number
  id: string
}

(async () => {
  try {
    firebase.initializeApp({
      credential: firebase.credential.cert({
        projectId: serviceAcountKey.project_id,
        clientEmail: serviceAcountKey.client_email,
        privateKey: serviceAcountKey.private_key
      })
    })

    const db = getFirestore()
    connectFirestoreEmulator(db, 'localhost', 8080)

    const querySnapshot = (await db.collection('users').get()) as Aiueo[]
    const batch = db.batch()
    querySnapshot.forEach((postDoc) => {
      batch.set(
        db.collection('stamps').doc(postDoc.id),
        {
          aaa: 1
        },
        { merge: true }
      )
    })

    await batch.commit()
  } catch (err) {
    console.log(err)
  }
})()
