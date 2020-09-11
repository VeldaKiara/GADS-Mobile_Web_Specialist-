firebase.initializeApp({
    apiKey: "AIzaSyBPu4E3FCanBaqVk4EBDHpmBpRMp8C4A_M",
    authDomain: "weather-app-2ed12.firebaseapp.com",
    databaseURL: "https://weather-app-2ed12.firebaseio.com",
    projectId: "weather-app-2ed12",
    storageBucket: "weather-app-2ed12.appspot.com",
    messagingSenderId: "208140697133",
    appId: "1:208140697133:web:712058b890cbaedbbb82a4"
  });
  // Initialize Cloud Firestore through Firebase
  
  
const db = firebase.firestore();
db.enablePersistence().catch(err => {
    if (err.code == "failed-precondition") {
      // Multiple tabs open, persistence can only be enabled
      // in one tab at a a time.
      // ...
    } else if (err.code == "unimplemented") {
      // The current browser does not support all of the
      // features required to enable persistence
      // ...
    }
}); 

