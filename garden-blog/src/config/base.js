import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/firestore'
import 'firebase/auth'



const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCdyLeIMurPiP6nyyN2P52YcQ81Ouvp0Qo",
    authDomain: "garden-blog-5050a.firebaseapp.com",
    databaseURL: "https://garden-blog-5050a-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "garden-blog-5050a",
    storageBucket: "garden-blog-5050a.appspot.com",
    messagingSenderId: "53490440998",
    appId: "1:53490440998:web:05f66caa0b8857ca47bfe7",
    measurementId: "G-2MHHYZQYNG"
})

const base = Rebase.createClass(firebaseApp.database())

// This is a named export
export { firebaseApp }

// this is a default export
export default base
