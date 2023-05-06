import path from 'path'
import admin from 'firebase-admin'
import { restore } from 'firestore-export-import'
import '@/utils/firebaseAdmin'
import { searchFiles } from '@/utils/searchFiles'

try {
  // storage配下のディレクトリ構造を維持したままemulatorにuploadする
  const bucket = admin.storage().bucket()
  const storagePath = path.join(process.cwd(), 'firebase/seeds/storage/')
  const files = searchFiles(storagePath)
  files.forEach(async (file) => {
    await bucket.upload(file.dir, { destination: file.name })
  })

  // firestore配下のjsonをemulatorにupload
  const dirPath = path.join(process.cwd(), 'firebase/seeds/firestore/')
  const jsons = searchFiles(dirPath)
  jsons.forEach(async (json) => {
    await restore(json.dir)
  })
} catch (e) {
  console.error(e)
}
