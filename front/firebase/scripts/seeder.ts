import admin from '@/utils/firebaseAdmin'
import { restore } from 'firestore-export-import'
import { readJson } from '@/utils/readJson'

const seeder = async () => {
  const users = readJson('firebase/seeds/users.json')
  const db = admin.firestore()
  // await importer.restore('firebase/seeds/users.json')
  console.log(restore)
}

;(async () => {
  try {
    console.log('seeding...')
    await seeder()
    console.log('done')
  } catch (e) {
    console.log(e)
  }
})()
