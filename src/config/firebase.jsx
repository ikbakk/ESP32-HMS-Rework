import { initializeApp } from 'firebase/app'
import { firebaseConfig } from './firebase.config'
import { getDatabase } from 'firebase/database'

export const Firebase = initializeApp(firebaseConfig)
export const database = getDatabase()
