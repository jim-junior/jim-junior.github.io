"use client";
import { CssVarsProvider } from "@mui/joy/styles";
import CssBaseline from "@mui/joy/CssBaseline";
import Navbar from "./navbar";

export function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <CssVarsProvider disableTransitionOnChange>
      <CssBaseline />
      <Navbar />
      {children}
    </CssVarsProvider>
  );
}
