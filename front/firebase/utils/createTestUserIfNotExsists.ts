import path from 'path'
import admin from 'firebase-admin'
import { readJson } from '@/utils/readJson'
import { TestUserType } from '@/utils/type'

export const createTestUserIfNotExsists = async () => {
  const users = await admin.auth().listUsers(1)
  if (!users.users.length) {
    const testUser = readJson<TestUserType>(
      path.join(process.cwd(), 'firebase/seeds/auth/test-user.json')
    )
    await admin.auth().createUser(testUser)
  }
}
