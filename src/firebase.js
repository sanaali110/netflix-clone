import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth/cordova";
import { addDoc, getFirestore,collection } from "firebase/firestore/lite";
import { toast } from "react-toastify";


const firebaseConfig = {
  apiKey: "AIzaSyAyjWht0pVIOPVQ7LBdG_zYOE63d3EnfPQ",
  authDomain: "netflix-clone-65ccd.firebaseapp.com",
  projectId: "netflix-clone-65ccd",
  storageBucket: "netflix-clone-65ccd.appspot.com",
  messagingSenderId: "135523912590",
  appId: "1:135523912590:web:596d71922e7d5e170872df"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password)=> {
    try {
      const res =  await createUserWithEmailAndPassword(auth,email,password);
      const user = res.user;
      await addDoc(collection(db, "user"),{
        uid: user.uid,
        name,
        authProvider : "local",
        email,
      })
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }   
}

const login = async(email,password)=>{
    try {
     await signInWithEmailAndPassword(auth,email,password);
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));

    }
}

const logout = () =>{
    signOut(auth);
}
export {auth,db,login,logout,signup}