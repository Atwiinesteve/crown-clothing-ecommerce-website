// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// firebase auth providers
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithRedirect,
	signInWithPopup,
	signInWithEmailAndPassword,
	GoogleAuthProvider,
	signOut
} from "firebase/auth";

// firebase/firestore file util functions
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyCsthX06b2T0mNZGIbRz_rjymiROU7gaPk",
	authDomain: "crwn-clothing-aacff.firebaseapp.com",
	projectId: "crwn-clothing-aacff",
	storageBucket: "crwn-clothing-aacff.appspot.com",
	messagingSenderId: "97485902031",
	appId: "1:97485902031:web:5d1b42575a04a2544867ba",
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
	prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
	signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
	signInWithRedirect(auth, googleProvider);



// ===============================================
// firestore methods
// ===============================================

export const db = getFirestore();

export const createUserDocumentFromAuth = async (
	userAuth,
	additionalInformation = {},
) => {
	if (!userAuth) return;

	const userDocRef = doc(db, "users", userAuth.uid);

	const userSnapshot = await getDoc(userDocRef);

	if (!userSnapshot.exists()) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await setDoc(userDocRef, {
				displayName,
				email,
				createdAt,
				...additionalInformation,
			});
		} catch (error) {
			console.log("error creating the user", error.message);
		}
	}

	return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
	if (!email || !password) return;

	return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
	if (!email || !password) return;

	return await signInWithEmailAndPassword(auth, email, password);
};

// signout user
export const signOutUser = async () => await signOut(auth);
