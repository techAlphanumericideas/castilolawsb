import { initializeApp, getApps } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBjOaaSIF5BtByh8kB4Un2ZIgnE2o3-fdg",
  authDomain: "castilolawsb-92445.firebaseapp.com",
  projectId: "castilolawsb-92445",
  storageBucket: "castilolawsb-92445.firebasestorage.app",
  messagingSenderId: "176376467148",
  appId: "1:176376467148:web:e0f99bc8e854bba7fbbc69",
  measurementId: "G-YZ4RYQCLHH",
};



// Initialize Firebase securely avoiding multiple initializations in dev mode
const app =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

// Initialize analytics only on client side
let analytics: ReturnType<typeof getAnalytics> | null = null;
if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}

export { app, analytics };
