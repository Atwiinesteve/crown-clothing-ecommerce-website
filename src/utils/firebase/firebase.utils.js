// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyCsthX06b2T0mNZGIbRz_rjymiROU7gaPk",
	authDomain: "crwn-clothing-aacff.firebaseapp.com",
	projectId: "crwn-clothing-aacff",
	storageBucket: "crwn-clothing-aacff.appspot.com",
	messagingSenderId: "97485902031",
	appId: "1:97485902031:web:5d1b42575a04a2544867ba",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
	prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

// creating user.
export const createUserDocumentFromAuth = async (userAuth) => {
	const userDocRef = await doc(db, 'users', userAuth.uid);
	
	const userSnapShot = await getDoc(userDocRef);

	if(!userSnapShot.exists()) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();
		try {
			await setDoc(userDocRef, {
				displayName,
				email,
				createdAt
			})
		} catch (error) {
			console.log(error);
		}
	} else {
		return userDocRef;
	}
}