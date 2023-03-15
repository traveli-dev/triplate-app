import admin from 'firebase-admin'
import { readJson } from '@/utils/readJson'

if (!admin.apps.length) {
  const serviceAccountKey = readJson<admin.ServiceAccount>(
    'firebase/cert/serviceAccountKey.json'
  )
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccountKey)
  })
}

export default admin
