"use client";
import { CssVarsProvider } from "@mui/joy/styles";
import CssBaseline from "@mui/joy/CssBaseline";
import Navbar from "./navbar";
import { Footer } from "./footer";

export function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <CssVarsProvider disableTransitionOnChange>
      <CssBaseline />
      <div className="bg-[#f9f9fa] text-[#1a1c1d] selection:bg-[#0053a1]/10 selection:text-[#0053a1] min-h-screen">
        <div className="fixed inset-0 dot-grid -z-10 pointer-events-none"></div>
        <Navbar />
        <main className="pt-32 pb-24 px-6 lg:px-12 max-w-7xl mx-auto">
          {children}
        </main>
        <Footer />
      </div>
    </CssVarsProvider>
  );
}
