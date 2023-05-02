import path from 'path'
import admin from 'firebase-admin'
import { restore } from 'firestore-export-import'
import '@/utils/firebaseAdmin'

(async () => {
  try {
    const bucket = admin.storage().bucket()
    const pathe = path.join(process.cwd(), "firebase/seeds/resources/thumbnail_sample.jpg");
  
    await bucket.upload(pathe, { destination: 'thumbnail_sample.jpg' });  
    await restore('firebase/seeds/users.json')
  
  } catch (e) {
    console.error(e)
  }
})()