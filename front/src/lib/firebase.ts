import { getAnalytics } from 'firebase/analytics'
import { initializeApp, getApps } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { connectAuthEmulator } from 'firebase/auth'
import { connectFirestoreEmulator, getFirestore } from 'firebase/firestore'
import { getStorage, connectStorageEmulator } from 'firebase/storage'
import 'firebase/analytics'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
}

const app = getApps()[0] || initializeApp(firebaseConfig)
const db = getFirestore(app)
const storage = getStorage(app)
const analytics =
  process.env.NODE_ENV === 'production' && typeof window !== 'undefined'
    ? getAnalytics(app)
    : null
const auth = getAuth(app)

if (process.env.NODE_ENV !== 'production') {
  connectFirestoreEmulator(db, 'localhost', 8080)
  connectStorageEmulator(storage, 'localhost', 9199)
  connectAuthEmulator(auth, 'http://localhost:9099', { disableWarnings: true })
}

export { db, analytics, auth, storage }
