
// Fix: Use the official compat paths for Firebase v9+ to support v8 style syntax
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAIfbogrZ4Rs0t2mBNVfg9GNpfDk5ggfa0",
  authDomain: "total-ai-financial-core.firebaseapp.com",
  projectId: "total-ai-financial-core",
  storageBucket: "total-ai-financial-core.firebasestorage.app",
  messagingSenderId: "180774067633",
  appId: "1:180774067633:android:f5aeb037e93a2f7a2ab190"
};

// Initialize Firebase using the compat API to ensure compatibility
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export default firebase;
