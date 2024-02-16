
import firebaseApp, { COLLECTIONS, db } from '@/firebase/firebaseConfig'
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { doc, setDoc } from 'firebase/firestore';

const auth = getAuth(firebaseApp);

export default async function signUp(email, password) {
    let result = null,
        error = null;
    try {
        result = await createUserWithEmailAndPassword(auth, email, password);
        if (result.user != null){
            const user = {
                uid: result.user.uid,
                email: result.user.email,
                metadata: {
                    creationTime: new Date(result.user.metadata.creationTime),
                    lastSignInTime: new Date(result.user.metadata.lastSignInTime),
                }
            }

            // await sendEmailVerification(result.user);
            await setDoc(doc(db, COLLECTIONS.USERS, result.user.uid), user);
          }
    } catch (e) {
        error = e;
    }

    return { result, error };
}