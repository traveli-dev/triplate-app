import {
  Auth,
  User,
  onAuthStateChanged as onFirebaseAuthStateChanged
} from 'firebase/auth'

export const onAuthStateChanged = (auth: Auth) => {
  // firebaseのonAuthStateChangedを同期的に処理できるようにする
  const promise: Promise<User | null> = new Promise((resolve) => {
    const unsubscribe = onFirebaseAuthStateChanged(auth, (user) => {
      resolve(user)
    })
    unsubscribe()
  })

  return promise
}
