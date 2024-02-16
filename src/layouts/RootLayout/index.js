import { AuthContextProvider } from "@/contexts/AuthContext";
import Header from "../../components/Header";

export default function RootLayout({ children }) {
    return <>
        <AuthContextProvider>
            <Header />
            <main>
                {children}
            </main>
        </AuthContextProvider>
    </>
}