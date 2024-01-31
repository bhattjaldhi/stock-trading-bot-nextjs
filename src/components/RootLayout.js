"use client";
import { Box, Container, ThemeProvider, Typography } from "@mui/material";
import theme from "@/styles/theme";
import Header from "@/components/Header";
import "@fontsource/poppins";

export default function RootLayout({ children }) {
  return (
    <ThemeProvider theme={theme}>
        <Header />
        <Container component="main" sx={{ flexGrow: 1 }} style={{ minWidth: 1500 }}>
          {children}
        </Container>
        {/* <Footer /> */}
    </ThemeProvider>
  );
}
