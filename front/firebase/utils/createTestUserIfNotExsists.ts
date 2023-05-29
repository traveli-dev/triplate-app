import path from 'path'
import admin from 'firebase-admin'
import { readJson } from '@/utils/readJson'
import { TestUserType } from '@/utils/type'

export const createTestUserIfNotExsists = async () => {
  const users = await admin.auth().listUsers()
  if (!users.users.find((item) => item.email === 'test@example.com')) {
    const testUser = readJson<TestUserType>(
      path.join(process.cwd(), 'firebase/seeds/auth/test-user.json')
    )
    await admin.auth().createUser(testUser)
  }
}
