import firebase from "firebase/compat/app";
// importing firebase form the firebase dependency when we install  the help of npm (as a pacakage)
import "firebase/compat/firestore";
//same here importing the same with storage too
import "firebase/compat/auth";
//importing for auth

const config = {
  apiKey: "AIzaSyAd6PqA5AMoErMtM_T5GjKGNebV8Ul-jEo",
  authDomain: "crown-db-007.firebaseapp.com",
  projectId: "crown-db-007",
  storageBucket: "crown-db-007.appspot.com",
  messagingSenderId: "105050875214",
  appId: "1:105050875214:web:a2e52d7a7b895b4b8c2a1f",
  measurementId: "G-V0FCCZ7VXV",
};
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  // const userRef = firestore.doc('users/jsakdfjads')
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  // console.log(userRef);
  return userRef;
};

firebase.initializeApp(config); // passing the above object as argument
export const auth = firebase.auth(); //this is the imported auth method
export const firestore = firebase.firestore(); // this is the imported storage method.

const provider = new firebase.auth.GoogleAuthProvider(); //this will give the access to new GoogleAuthProvider class from the authintation library.

provider.setCustomParameters({ prompt: "select_account" }); // using this method which take some custome parameter and thsi will always trigger google popup when ever we use the abaove GoogleAuthProvider method.

export const signInWithGoogle = () => auth.signInWithPopup(provider); //here we are signing in with the GoogleOne so we are using hte GoogleOne sign-in method, we can use twitter or facebook etc... and providing the provider as a argument which allow to sing-in using googleOne method

export default firebase; //exporting the firebase whole libray in case if we need somewhere;
