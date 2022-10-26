import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apikey: REACT_APP_API_KEY,
  authDomain: REACT_APP_authDomain,
  projectId: REACT_APP_projectId,
  storageBucket: REACT_APP_storageBucket,
  messagingSenderId: REACT_APP_messagingSenderId,
  appId: REACT_APP_appId,
  measurementId: REACT_APP_measurementId,
});

export const auth = app.auth();
export default app;
