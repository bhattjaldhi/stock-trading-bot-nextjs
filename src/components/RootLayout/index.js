import Header from "../Header";

export default function RootLayout({ children }) {
    return <>
        <Header />
        <main>
            {children}
        </main>
    </>
}