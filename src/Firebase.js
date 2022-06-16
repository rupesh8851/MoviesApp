import firebase from "firebase/app"
import "firebase/auth"
import 'firebase/storage'
import 'firebase/firestore'

// firebase.initializeApp(
//     {
//         apiKey: "AIzaSyD990jNK2VPvB1FURCy9gWFFO4KAUA6k84",
//         authDomain: "fir-1b399.firebaseapp.com",
//         projectId: "fir-1b399",
//         storageBucket: "fir-1b399.appspot.com",
//         messagingSenderId: "455202713801",
//         appId: "1:455202713801:web:c980eaf45c8c76c2fd9d18"
//       }
// )


firebase.initializeApp({ 
    apiKey: "AIzaSyDtTRGEdYT2R-27lp3yTidhnEyV5mDLmrA",
    authDomain: "movies2-b28d2.firebaseapp.com",
    projectId: "movies2-b28d2",
    storageBucket: "movies2-b28d2.appspot.com",
    messagingSenderId: "831281191112",
    appId: "1:831281191112:web:dc829efe0c5fddce5f2dfd"
  })
  

export const auth = firebase.auth();
const firestore = firebase.firestore();
export const database ={
    users:firestore.collection('users'),
    posts:firestore.collection('posts'),
    comments:firestore.collection('comments'),
    getCurrentTimeStamp : firebase.firestore.FieldValue.serverTimestamp
}
export const storage = firebase.storage();
// export default firebase;