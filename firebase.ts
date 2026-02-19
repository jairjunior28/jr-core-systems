
import { initializeApp, getApps } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAIfbogrZ4Rs0t2mBNVfg9GNpfDk5ggfa0",
  authDomain: "total-ai-financial-core.firebaseapp.com",
  projectId: "total-ai-financial-core",
  storageBucket: "total-ai-financial-core.firebasestorage.app",
  messagingSenderId: "180774067633",
  appId: "1:180774067633:android:f5aeb037e93a2f7a2ab190"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();

export default app;
