import { fonts } from "./fonts";
import "./globals.css";
import { Providers } from "./provider";

export const metadata = {
  title: "BR@IN",
};

export default function Layout({ children }) {
  return (
    <html lang="en" className={fonts.poppins.variable}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
