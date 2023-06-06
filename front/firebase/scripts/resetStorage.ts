import admin from 'firebase-admin'
import '@/utils/firebaseAdmin'

try {
  deleteAllFiles()
} catch (e) {
  console.error(e)
}

async function deleteAllFiles() {
  try {
    const bucket = admin.storage().bucket()
    const [files] = await bucket.getFiles()
    files.forEach(async (file) => {
      try {
        await file.delete()
      } catch (e) {
        console.error(e)
      }
    })
  } catch (e) {
    console.error(e)
  }
}
