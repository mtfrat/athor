import firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDuhg17bdr3qcMKfs1xmJn0CFoZUVPtY_U",
    authDomain: "clase12-reactjs.firebaseapp.com",
    projectId: "clase12-reactjs",
    storageBucket: "clase12-reactjs.appspot.com",
    messagingSenderId: "275014265395",
    appId: "1:275014265395:web:4420a27354e3f843709146"
};

const app = firebase.initializeApp(firebaseConfig);

export function getFirestore (){
    return firebase.firestore(app)
}
