import importer from 'firestore-export-import'
import admin from '@/utils/firebaseAdmin'
import { readJson } from '@/utils/readJson'

const seeder = async () => {
  const users = readJson('firebase/seeds/users.json')
  const db = admin.firestore()
  await importer.restore('./seeds/users.json')
}

(async () => {
  try {
    console.log('seeding...')
    await seeder()
    console.log('done')
  } catch (e) {
    console.log(e)
  }
})()
