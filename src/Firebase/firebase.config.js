// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;

/*

process.env.REACT_APP_apiKey
process.env.REACT_APP_authDomain
process.env.REACT_APP_projectId
process.env.REACT_APP_storageBucket
process.env.REACT_APP_messagingSenderId
process.env.REACT_APP_appId

REACT_APP_apiKey=AIzaSyDdxlMuAbHsy9_Q8w4uZbek23VXqQAwsQE
REACT_APP_ authDomain=educapedia-ab28b.firebaseapp.com
REACT_APP_projectId=educapedia-ab28b
REACT_APP_storageBucket=educapedia-ab28b.appspot.com
REACT_APP_ messagingSenderId=634243255064
REACT_APP_appId=1:634243255064:web:9a9b4b1b0481f181c92c6d


  apiKey: "AIzaSyDdxlMuAbHsy9_Q8w4uZbek23VXqQAwsQE",
  authDomain: "educapedia-ab28b.firebaseapp.com",
  projectId: "educapedia-ab28b",
  storageBucket: "educapedia-ab28b.appspot.com",
  messagingSenderId: "634243255064",
  appId: "1:634243255064:web:9a9b4b1b0481f181c92c6d"


*/