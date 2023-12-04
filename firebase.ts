import { getApp, getApps, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getFunctions } from 'firebase/functions';

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: 'AIzaSyARE9JqLNXehQzSRO6AzBjT1FHiyRT8Oww',
   authDomain: 'saas-translator-app-ededd.firebaseapp.com',
   projectId: 'saas-translator-app-ededd',
   storageBucket: 'saas-translator-app-ededd.appspot.com',
   messagingSenderId: '891769093021',
   appId: '1:891769093021:web:dde0a3f2d9b60dc0dbcd74',
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const functions = getFunctions(app);

export { db, auth, functions };
