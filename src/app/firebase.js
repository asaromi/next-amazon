import {initializeApp, getApps} from 'firebase/app'
import {getAuth} from 'firebase/auth'
import {initializeFirestore, persistentLocalCache, CACHE_SIZE_UNLIMITED} from 'firebase/firestore'

const firebaseConfig = process.env.FIREBASE_CONFIG || {}

export const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0]

export const auth = getAuth(app)

export const db = initializeFirestore(app, {
  localCache: persistentLocalCache()
})
