import * as firebase from 'firebase'

let config = {
  databaseURL: 'https://kanban-realtime-vuefire.firebaseio.com',
  projectId: 'kanban-realtime-vuefire'
}
let firebaseApp = firebase.initializeApp(config)
let db = firebaseApp.database()

export default db
