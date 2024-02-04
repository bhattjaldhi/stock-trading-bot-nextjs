
import firebaseApp from '../../firebaseConfig'
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification } from "firebase/auth";

const auth = getAuth(firebaseApp);


export default async function signUp(email, password) {
    let result = null,
        error = null;
    try {
        result = await createUserWithEmailAndPassword(auth, email, password);
        if (result.user != null){
            await sendEmailVerification(result.user);
          }
    } catch (e) {
        error = e;
    }

    return { result, error };
}