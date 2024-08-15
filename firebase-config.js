import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDcnbhIZJs2HHFEnkm4WRLDCpgpQ_vjNdg",
  authDomain: "projectcheevo.firebaseapp.com",
  projectId: "projectcheevo",
  storageBucket: "projectcheevo.appspot.com",
  messagingSenderId: "391082889855",
  appId: "1:391082889855:web:23d18cbc9be32d90b9e54a",
  measurementId: "G-81M4GN8JW1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);