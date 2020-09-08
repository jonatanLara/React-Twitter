import React from 'react'
import {render} from 'react-dom'
import firebase from 'firebase'
import App from './components/App'
  // Initialize Firebase
firebase.initializeApp({
  apiKey: 'AIzaSyAMEDef37g2zwRYgEUjP4CRZMdxdBb9deQ',
  authDomain: 'twitter-react-eb214.firebaseapp.com',
  databaseURL: 'https://twitter-react-eb214.firebaseio.com',
  projectId: 'twitter-react-eb214',
  storageBucket: 'twitter-react-eb214.appspot.com',
  messagingSenderId: '40826749189',
  appId: '1:40826749189:web:f8938506687a9ac5dff76c'
})
render(<App />,document.getElementById('root'))
