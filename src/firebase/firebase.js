import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBDq2Cu8Bk7Z6N94W8jGBSc8yezl0eUqo4",
  authDomain: "react-expensify-app-da24c.firebaseapp.com",
  databaseURL: "https://react-expensify-app-da24c.firebaseio.com",
  projectId: "react-expensify-app-da24c",
  storageBucket: "react-expensify-app-da24c.appspot.com",
  messagingSenderId: "1073382484437"
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };
