// TODO Sign into the database anonymously
var config = {
  apiKey: 'AIzaSyCvYZzRKxYYxHzOB0_bIHAxaUJ8_FH_X5Y',
  authDomain: 'messaging-app-ff75d.firebaseapp.com',
  databaseURL: 'https://messaging-app-ff75d.firebaseio.com',
  projectId: 'messaging-app-ff75d',
  storageBucket: 'messaging-app-ff75d.appspot.com',
  messagingSenderId: '905767084299'
}
firebase.initializeApp(config)
firebase.auth().signInAnonymously()

// CREATE a new woof in Firebase
function createWoofInDatabase (woof) {
  // TODO create a new record in Firebase
  firebase.database().ref('woofs').push(woof)
}
// READ from Firebase when woofs are added, changed, or removed
// Write a function for each 'on' method and call addWoofRow,
// updateWoofRow, and deleteWoofRow to update the page. Make
// sure to pass the right parameters (hint: these functions are
// defined in woofer-ui.js).
function readWoofsInDatabase () {
  // TODO read new, changed, and deleted Firebase records
  firebase.database().ref('woofs')
  .on('child_added', function (newMegSnapshot) {
    addWoofRow(newMegSnapshot.key, newMegSnapshot.val())
  })
  firebase.database().ref('woofs')
  .on('child_changed', function (updatedSnapshot) {
    updateWoofRow(updatedSnapshot.key, updatedSnapshot.val())
  })
  firebase.database().ref('woofs')
  .on('child_removed', function (removedSnapshot) {
    deleteWoofRow(removedSnapshot.key, removedSnapshot.val())
  })
}

// UPDATE the woof in Firebase
function updateWoofInDatabase (woofKey, woofText) {
  // TODO update the record in Firebase
  firebase.database().ref('woofs').child(woofKey).child('text').set(woofText)
}

// DELETE the woof from Firebase
function deleteWoofFromDatabase(woofKey) {
  // TODO delete the record from Firebase
  firebase.database().ref('woofs').child(woofKey).remove()
}

// Load all of the data
readWoofsInDatabase()
