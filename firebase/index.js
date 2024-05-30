import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC0gDaDMEY-8ZWveLanWs3tBGgnum6MV4c",
  authDomain: "otp-messaging-ce2cd.firebaseapp.com",
  projectId: "otp-messaging-ce2cd",
  storageBucket: "otp-messaging-ce2cd.appspot.com",
  messagingSenderId: "622493369837",
  appId: "1:622493369837:web:c0285a3f3ae06fbc1293e4",
  measurementId: "G-JZ02ECCMXX",
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

export default firebase;
