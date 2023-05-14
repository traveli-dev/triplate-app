import admin from 'firebase-admin'
import { readJson } from '@/utils/readJson'
import { ServiceAccountType } from '@/utils/type'

if (!admin.apps.length) {
  const serviceAccountKey = readJson<ServiceAccountType>(
    'firebase/cert/serviceAccountKey.json'
  )

  const serviceAccount: admin.ServiceAccount = {
    projectId: serviceAccountKey.project_id,
    clientEmail: serviceAccountKey.client_email,
    privateKey: serviceAccountKey.private_key.replace(/\\n/g, '\n')
  }

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: `${serviceAccountKey.project_id}.appspot.com`
  })
}
