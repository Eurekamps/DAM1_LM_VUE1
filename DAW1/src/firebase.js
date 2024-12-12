import { initializeApp } from 'firebase/app'
import { getFirestore, collection } from 'firebase/firestore'
// ... other firebase imports

export const firebaseApp = initializeApp({
  apiKey: "AIzaSyDwY8ctx8fJ73m4_73lnjPk3bBcRMre8Jw",
  authDomain: "dam-daw-lm1.firebaseapp.com",
  projectId: "dam-daw-lm1",
  storageBucket: "dam-daw-lm1.firebasestorage.app",
  messagingSenderId: "892128540697",
  appId: "1:892128540697:web:c17e21db51d4918c589288",
  measurementId: "G-CN0EE8DHRL"
})

// used for the firestore refs
export const db = getFirestore(firebaseApp)