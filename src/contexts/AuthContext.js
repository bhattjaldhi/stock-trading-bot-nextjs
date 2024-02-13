import React from "react";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import firebaseApp, { COLLECTIONS, db } from "@/firebase/firebaseConfig";
import { usePathname, useRouter } from "next/navigation";
import { Box, Progress } from "@chakra-ui/react";
import { doc, getDoc, setDoc } from "firebase/firestore";

const auth = getAuth(firebaseApp);

const PUBLIC_ROUTES = ['/', '/pricing', '/login', '/register']

export const AuthContext = React.createContext({});

/**
 * Updates user data in Firestore.
 * @param {object} values - The new values to update.
 * @returns {Promise<void>} A Promise that resolves when the update is successful.
 */
export const updateUserData = (values) => {
  return new Promise(async (resolve, reject) => {
    try {
      const ref = doc(db, COLLECTIONS.USERS, auth.currentUser.uid);
      await setDoc(ref, values, { merge: true });
      resolve("Document updated successfully.")
    } catch (error) {
      console.error(error)
      reject(error)
    }
  })
}

export const useAuthContext = () => {
  const authContext = React.useContext(AuthContext);
  if (!authContext) {
    throw new Error("useAuthContext must be used within an AuthContextProvider");
  }
  return { user: authContext.user, metadata: authContext.metadata, updateUserData: authContext.updateUserData };
};

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = React.useState(undefined);
  const [metadata, setMetadata] = React.useState(undefined);
  const [loading, setLoading] = React.useState(true);
  const { replace } = useRouter();
  const pathname = usePathname()

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);

        const userDocRef = doc(db, "users", user.uid);
        getDoc(userDocRef).then(snapshot => {
          setMetadata(snapshot.data());
        });

        if (pathname.includes('login') || pathname.includes('register')) {
          replace('/user/dashboard');
          return
        }
      } else {
        setUser(null);
        if (!PUBLIC_ROUTES.includes(pathname)) {
          replace('/login'); // Redirect to the login page if not authenticated
          return
        }
      }
      setLoading(false);
    }, (error) => {
      // Handle any potential errors during authentication
      console.error("Authentication error:", error);
      setLoading(false); // Ensure to stop loading even if there's an error
    });

    return () => unsubscribe(); // Cleanup function to unsubscribe from the listener
  }, []);

  if (loading) {
    // Show a loading indicator while waiting for authentication
    return <Box height={'100vh'} width={'100%'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
      <Progress size='sm' isIndeterminate width={"200px"} colorScheme='brand' />
    </Box>;
  }

  return (
    <AuthContext.Provider value={{ user, metadata, updateUserData }}>
      {children}
    </AuthContext.Provider>
  );
};
