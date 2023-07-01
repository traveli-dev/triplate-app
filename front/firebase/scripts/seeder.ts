import path from 'path'
import admin from 'firebase-admin'
import { restore } from 'firestore-export-import'
import '@/utils/firebaseAdmin'
import { createTestUserIfNotExsists } from '@/utils/createTestUserIfNotExsists'
import { searchFiles } from '@/utils/searchFiles'

try {
  // test user 作成
  createTestUserIfNotExsists()

  // storage配下のディレクトリ構造を維持したままemulatorにuploadする
  const bucket = admin.storage().bucket()
  const storagePath = path.join(process.cwd(), 'firebase/seeds/storage/')
  const files = searchFiles(storagePath)
  files.forEach(async (file) => {
    const name = file.name.split('.').slice(0, -1).join('.')
    await bucket.upload(file.dir, {
      destination: name,
      public: true,
      contentType: 'image/jpeg'
    })
  })

  // firestore配下のjsonをemulatorにupload
  const dirPath = path.join(process.cwd(), 'firebase/seeds/firestore/')
  const jsons = searchFiles(dirPath)
  jsons.forEach(async (json) => {
    await restore(json.dir, {
      dates: ['date', 'time', 'createdAt', 'updatedAt']
    })
  })
} catch (e) {
  console.error(e)
}
