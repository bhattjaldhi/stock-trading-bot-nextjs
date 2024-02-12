import React from "react";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import firebaseApp from "@/firebase/firebaseConfig";
import { usePathname, useRouter } from "next/navigation";
import { Box, Progress } from "@chakra-ui/react";

const auth = getAuth(firebaseApp);

const PUBLIC_ROUTES = ['/', '/pricing', '/login', '/register', '/setup-account']

export const AuthContext = React.createContext({});

export const useAuthContext = () => {
  const authContext = React.useContext(AuthContext);
  if (!authContext) {
    throw new Error("useAuthContext must be used within an AuthContextProvider");
  }
  return { user: authContext.user };
};

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = React.useState(undefined);
  const [loading, setLoading] = React.useState(true);
  const { replace } = useRouter();
  const pathname = usePathname()

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);

        if (pathname.includes('login') || pathname.includes('register')) {
          replace('/user/dashboard');
          return
        }
      } else {
        setUser(null);
        if(!PUBLIC_ROUTES.includes(pathname)) {
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
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  );
};
