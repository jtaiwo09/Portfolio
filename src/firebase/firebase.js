import firebase from 'firebase';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBMRwq4iq85Rqqhp6rlTYITKsdyERloySE",
    authDomain: "my-portfolio-7e234.firebaseapp.com",
    projectId: "my-portfolio-7e234",
    storageBucket: "my-portfolio-7e234.appspot.com",
    messagingSenderId: "201196883135",
    appId: "1:201196883135:web:94e49525a1b0c6b3198a0a"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const storage = firebaseApp.storage();

  export {
      storage,
  }