import Header from "../../components/Header";

export default function RootLayout({ children }) {
    return <>
        <Header />
        <main>
            {children}
        </main>
    </>
}