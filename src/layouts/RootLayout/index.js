import { AuthContextProvider } from "@/contexts/AuthContext";
import Header from "../../components/Header";

export default function RootLayout({ children }) {
    return <>
        <Header />
        <main>
           <AuthContextProvider>
           {children}
           </AuthContextProvider>
        </main>
    </>
}