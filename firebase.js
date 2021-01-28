import * as firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyA8eUDmUPn88wRXqG7-8DfTqJ42hT9XYXo',
  authDomain: 'signal-build.firebaseapp.com',
  projectId: 'signal-build',
  storageBucket: 'signal-build.appspot.com',
  messagingSenderId: '649861194982',
  appId: '1:649861194982:web:d0275c37d479b29f3f8727',
}

let app
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app()
}

const db = app.firestore()
const auth = firebase.auth()

export { db, auth }
