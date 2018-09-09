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


// DOC
// firebase.google.com/docs/reference/js

// -----------------------//
// ACCESING ARRAY DATA
// -----------------------//
// database.ref('notes').push({
//   title: 'Courses',
//   body: 'React stuff'
// });
// database.ref('notes/-LLjEZNJmqbnnB4CG4e3').update({
//   body: 'Buy food'
// });
// database.ref('notes/-LLjEZNJmqbnnB4CG4e3').remove();


// Converting obj into array
// -----------------------//
// database.ref('expenses').push(
//   {
//     description: 'Desc 1',
//     note: '',
//     amount: 1500,
//     createdAt: 1450
//   }
// );

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });

//     console.log(expenses);
//   })
// ;

// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = [];
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });
//   console.log(expenses);
// });

// child_remove
database.ref('expenses').on('child_remove', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

// child_changed
database.ref('expenses').on('child_changed', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

// child_added
database.ref('expenses').on('child_added', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});



// -----------------------//
// SET DATA
// -----------------------//
// database.ref()
//   .set({
//     name: 'Leandro',
//     age: 27,
//     stressLevel: 6,
//     job: {
//       title: 'Software developer',
//       company: 'Banco Lagarchete'
//     },
//     isSingle: true,
//     location: {
//       city: 'Berlin',
//       state: 'Bayern',
//       country: 'Germany'
//     }
//   })
//   .then(() => {
//     console.log('Data is saved');
//   })
//   .catch((error) => {
//     console.error(error);
//   });


// -----------------------//
// REMOVE DATA
// -----------------------//
// database.ref('isSingle')
//   .remove()
//   .then(() => {
//     console.log('Data was removed');
//   })
//   .catch((error) => {
//       console.error('Error', error)
//   });
// OR
// database.ref('isSingle').set(null);


// -----------------------//
// UPDATE DATA
// -----------------------//
// database.ref()
//   .update({
//     stressLevel: 9,
//     'job/company': 'AWS',
//     'job/location': 'Berlin'
//   });


// -----------------------//
// FETCHING DATA - Once
// -----------------------//
// database.ref('location')
//   .once('value')
//   .then((snapshot) => {
//     const value = snapshot.val();
//     console.log(value);
//   })
//   .catch((e) => {
//     console.error('Error fetching data', e)
//   });

// -----------------------//
// FETCHING DATA - On
// -----------------------//
// const onValueChange = database.ref().on('value', (snapshot) => {
//   console.log(snapshot.val());
// }, (e) => {
//   console.error('Error data fetching', e)
// });

// setTimeout(() => {
//   database.ref('age').set(29);
// }, 3500);

// setTimeout(() => {
//   database.ref().off(onValueChange);
// }, 7000);

// setTimeout(() => {
//   database.ref('age').set(30);
// }, 10500);


// database.ref().on('value', (snapshot) => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// });