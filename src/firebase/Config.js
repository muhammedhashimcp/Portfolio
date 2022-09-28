// import firebase from 'firebase'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyAnUrR70mM7CD4I4RSyi5EWErNHqWyPqxQ',
	authDomain: 'muhammed-hashim-portfolio.firebaseapp.com',
	projectId: 'muhammed-hashim-portfolio',
	storageBucket: 'muhammed-hashim-portfolio.appspot.com',
	messagingSenderId: '800367923730',
	appId: '1:800367923730:web:d553f4e2393a3e6494becb',
	measurementId: 'G-BT3TK4J8NK',
};
export const Firebase = firebase.initializeApp(firebaseConfig);
