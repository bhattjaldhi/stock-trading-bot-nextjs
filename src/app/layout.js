import { Inter } from "next/font/google";
import "./globals.css";
import RootLayout from "@/components/RootLayout";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BR@IN",
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className={[inter.className]}>
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  );
}
