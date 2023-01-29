import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDAaaDGl3qCnueRpmxMUktnOKpPm1cQ31A",
	authDomain: "crown-clothing-db-713f2.firebaseapp.com",
	projectId: "crown-clothing-db-713f2",
	storageBucket: "crown-clothing-db-713f2.appspot.com",
	messagingSenderId: "1028305715114",
	appId: "1:1028305715114:web:bdb592506d34e7da8735d3",
};

// Initialize firebase app
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
	prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => { return signInWithPopup(auth, provider) };
