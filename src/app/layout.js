import { SpeedInsights } from '@vercel/speed-insights/next';

import { fonts } from "./fonts";
import "@/styles/App.css";
import { Providers } from "./providers";

export const metadata = {
  title: "BR@IN",
};

export default function Layout({ children }) {
  return (
    <html lang="en" className={fonts.poppins.variable}>
      <body>
          <Providers>{children}</Providers>
          <SpeedInsights />
      </body>
    </html>
  );
}
