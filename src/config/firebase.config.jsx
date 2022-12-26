export const firebaseConfig = {
  apiKey: import.meta.env.VITE_FirebaseApiKey,
  authDomain: import.meta.env.VITE_FirebaseAuthDomain,
  projectId: import.meta.env.VITE_FirebaseProjectId,
  databaseURL: import.meta.env.VITE_FirebaseDatabaseURL,
  storageBucket: import.meta.env.VITE_FirebaseStorageBucket,
  messagingSenderId: import.meta.env.VITE_FirebaseMessagingSenderId,
  appId: import.meta.env.VITE_FirebaseAppId,
  measurementId: import.meta.env.VITE_FirebaseMeasurementId
}
