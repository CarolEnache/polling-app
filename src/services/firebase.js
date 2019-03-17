import firebase from 'firebase';
import "firebase/firestore";

const config = {
    apiKey: "AIzaSyBEby0xCNQbMHUZPHd_i1pFWuFbwKDFMAM",
    authDomain: "polling-app-55e32.firebaseapp.com",
    databaseURL: "https://polling-app-55e32.firebaseio.com",
    projectId: "polling-app-55e32",
    storageBucket: "polling-app-55e32.appspot.com",
    messagingSenderId: "38695232712"
};

class Firebase {
  constructor() {
    firebase.initializeApp(config);
    this.store = firebase.firestore;
    this.auth = firebase.auth;
  }

  get polls() {
    return this.store().collections('polls');
  }
}

export default new Firebase();